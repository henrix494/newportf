import Msg from "@/Model/msg";
import connectDB from "@/lib/mongodb";
import { NextResponse, NextRequest } from "next/server";

export const POST = async (req: NextRequest, res: NextResponse) => {
  await connectDB();

  const { name, email, msg } = await req.json();
  if (!name || !email || !msg)
    return NextResponse.json("missing field", { status: 401 });
  else {
    try {
      const emailFind = await Msg.findOne({ email: email });
      if (!emailFind) {
        await Msg.insertMany({
          name: name,
          email: email,
          msg: msg,
        });
        return NextResponse.json("הודעה נשלחה", { status: 201 });
      } else {
        return NextResponse.json("הודעה כבר נישלחה", { status: 404 });
      }
    } catch (error) {
      console.log(error);
      return NextResponse.json({ error }, { status: 500 });
    }
  }
};

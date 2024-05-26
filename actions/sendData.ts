"use server";
import Msg from "@/Model/msg";
import connectDB from "@/lib/mongodb";

export const sendMSg = async (data: any) => {
  try {
    await connectDB();
  } catch (error) {
    return {
      errors: "כבר שלחתה הודעה",
    };
  }

  try {
    const { name, email, msg } = data;

    if (!name || !email || !msg) {
    } else {
      const emailFind = await Msg.findOne({ email: email });
      if (!emailFind) {
        await Msg.insertMany({
          name: name,
          email: email,
          msg: msg,
        });
        return {
          ok: "הודעה נשלחה",
        };
      } else {
        return {
          errors: "כבר שלחתה הודעה",
        };
      }
    }
  } catch (error) {
    console.error("Error occurred:", error);
    return {
      errors: "בעיה בשליחה נא לנסות שוב",
    };
  }
};

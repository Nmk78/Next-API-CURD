import { connectToMongoDB } from "@/app/lib/handler";
import post from "@/model/post";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export const GET = async (Request) => {
  try {
    await connectToMongoDB();

    const fetched_post = await post
      .findOne({ title: "UPDATED" })
      .select("title content");
    console.log(fetched_post);

    return new NextResponse(fetched_post);
  } catch (error) {
    return new NextResponse({ error: error });

    throw error;
  }
};

//UPDATE
export const PATCH = async (Request) => {
  try {
    const body = await Request.json();
    const { title } = body;
    await connectToMongoDB();

    const updated_post = await post
      .findOneAndUpdate(
        { title: "ABC" },
        { title: title },
        { new: true, useFindAndModify: false }
      )
      .select("title content");
    console.log(updated_post);

    return new NextResponse(updated_post);
  } catch (error) {
    throw error;
  }
};

export const DELETE = async (Request) => {
  try {
    console.log("Get");
    await connectToMongoDB();
    const res = await post.deleteOne({ title: "ABC" });
    console.log(res);
    let message;
    res.acknowledged == true ? (message = "Deleted") : (message = "Failed");
    return new NextResponse(message);
  } catch (error) {
    throw error;
  }
};

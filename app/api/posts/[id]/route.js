import { connectToMongoDB } from "@/app/lib/handler";
import post from "@/model/post";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export const GET = async (Request) => {
  try {

    await connectToMongoDB();

    const fetched_post = await post.findOne({title: "ABC"}).select("title content");
    console.log(fetched_post);

    return new NextResponse(fetched_post);
  } catch (error) {
      //     return new NextResponse({ error: error });

    throw error;
  }
};export const PATCH = async (Request) => {
  try {

      const body = Request.json();
      const {title} = body
    await connectToMongoDB();

    const fetched_post = await post.findOne({title: "ABC"}).select("title content");
    console.log(fetched_post);

    return new NextResponse(fetched_post);
  } catch (error) {
      //     return new NextResponse({ error: error });

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

import { connectToMongoDB } from "@/app/lib/handler";
import post from "@/model/post";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export const GET = async (Request, {params}) => {
  try {
    await connectToMongoDB();

    const id = params.id

    const fetched_post = await post
      .findOne({ id: id })
      .select("title content");
    console.log(id);
    
    if(!fetched_post){
      return new NextResponse("Error post not found")
    }

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

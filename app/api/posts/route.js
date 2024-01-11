import { connectToMongoDB } from "@/app/lib/handler";
import post from "@/model/post";
import { NextResponse } from "next/server";

export const GET = async (Request) => {
      try {
            console.log("Get");
            await connectToMongoDB()
            const posts = await post.find({}).select('title id')
            // console.log(posts);
            return new NextResponse([posts])
      } catch (error) {
            throw error;
      }
}
export const DELETE = async (Request) => {
      try {
            console.log("Get");
            await connectToMongoDB()
            const res = await post.deleteOne({title: "ABC"});
            console.log(res);
            let message;
            res.acknowledged == true ? message = "Deleted" : message = "Failed"
            return new NextResponse(message)
      } catch (error) {
            throw error;
      }
}
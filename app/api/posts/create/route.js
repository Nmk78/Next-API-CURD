import { connectToMongoDB } from "@/app/lib/handler"
import post from "@/model/post"
import { NextResponse } from "next/server"
import { createPortal } from "react-dom"

export const POST = async (Request)=>{
      try {
            const body = await Request.json();
            const {title, content, id} = body;
            await connectToMongoDB()
            const createdPost = await post.create({title: title, id: id, content: content})
            return new NextResponse(createdPost)
            // return new NextResponse({title: createdPost.title, content: createPortal.content})
            
      } catch (error) {
            console.log(error);
            throw error;
      }
}

export const DELETE = async (Request) => {
      try {
            console.log("Get");
            await connectToMongoDB()
            const res = await post.deleteMany({});
            console.log(res);
            let message;
            res.acknowledged == true ? message = "Deleted all posts" : message = "Failed"
            return new NextResponse(message)
      } catch (error) {
            throw error;
      }
}
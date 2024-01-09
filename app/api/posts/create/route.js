import { connectToMongoDB } from "@/app/lib/handler"
import post from "@/model/post"
import { NextResponse } from "next/server"
import { createPortal } from "react-dom"

export const POST = async ()=>{
      try {
            await connectToMongoDB()
            const createdPost = await post.create({title: "ABC", content: "ABCABCABCABCABCABCABC"})
            return new NextResponse(createdPost)
            // return new NextResponse({title: createdPost.title, content: createPortal.content})
            
      } catch (error) {
            console.log(error);
            throw error;
      }
}

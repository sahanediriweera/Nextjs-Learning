import getUser from '@/lib/getUser';
import getUserPosts from '@/lib/getUserPosts';
import { Suspense } from 'react';
import UserPosts from "./components/UserPosts"
import type { Metadata } from 'next';

type Params = {
    params:{
        userId:string
    }
}

export async function generateMetaData({params:{userId}}:Params):Promise<Metadata>{
  const userData:Promise<User> = getUser(userId);
  const user:User = await userData;

  return {
    title:user.name,
    description:`This is the page of ${user.name}`
  }
}



export default async function UserPage({params:{userId}}:Params) {

  const userData : Promise<User> = getUser(userId);
  const userPostsData: Promise<Post[]> = getUserPosts(userId); 
  // const[user,userPosts] = await Promise.all([userData,userPostsData]);
  const user = await userData;

  return (
    <>
    <h1>
      {user.name}
    </h1>
    <Suspense fallback={<h2>Loading ......</h2>}>
      {/* @ts-expect-error Server Component */}
      <UserPosts promise = {userPostsData}/>
    </Suspense>
    </>
  )
}

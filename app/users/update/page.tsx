'use client';

import { userState } from "@/app/recoil/atoms";
import Link from "next/link";
import { useRecoilState } from "recoil";

export default function UserUpdatePage(){

    const [ user, setUser ] = useRecoilState(userState);
    
    return (<div>
        <h1>Update User Page</h1>
        <input type="email" value={user.email} placeholder="Enter your email" onChange={(e)=> setUser((prev) => ({...prev, email: e.target.value}))}/>
        <input type="text" value={user.name} placeholder="Enter your name" onChange={(e)=> setUser((prev) => ({...prev, name: e.target.value}))}/>

        <Link href="/users/updated-user">Check Updated Result</Link>
    </div>)
}
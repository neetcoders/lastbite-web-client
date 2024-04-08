"use server"

import { cookies } from "next/headers";

export default async function getAuthToken () {
    const token = cookies().get('access_token')?.value;
    return token
}
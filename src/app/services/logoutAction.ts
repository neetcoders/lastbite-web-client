"use server"

import { cookies } from "next/headers";

export default async function logout () {
    return cookies().delete("access_token")
}
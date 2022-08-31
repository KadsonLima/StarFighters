import { Request, Response } from "express";
import { getFighter } from "../services/battleServices";


export async function battlePost(req:Request, res:Response) {
    const { firstUser, secondUser } : {firstUser: string, secondUser: string} = req.body;

    const firstUserDados = await getFighter(firstUser);
    const secondUserDados = await getFighter(secondUser);

    console.log(firstUserDados, secondUserDados);
    res.sendStatus(200)
}
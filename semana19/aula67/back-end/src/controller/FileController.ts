import { Request, Response } from "express";
import { S3Service } from "../services/S3Service";

export class FileController {
  public async fileUpload(req: Request, res: Response): Promise<void> {
    try {
      const file = req.files && (req.files.file as any);
      console.log("req.files: ", req.files);
      if (!file) {
        throw new Error("Você deve enviar um arquivo.");
      }

      const result = await new S3Service().uploadFile({
        name: file.name,
        file: file.data,
      });

      res.status(200).send(result);
    } catch (err) {
      res.status(400).send({
        message: err.message,
      });
    }
  }
}

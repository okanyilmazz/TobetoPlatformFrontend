import { Identifier } from "typescript";

export default interface GetListBlogResponse {
  id: Identifier;
  title: string;
  description: string;
  releaseDate: string;
  thumbnailPath: string;
}

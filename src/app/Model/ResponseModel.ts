import { ResponseCode } from "../enums/ResponseCode";

export class ResponseModel{
    responseCode:ResponseCode=ResponseCode.NotSet;
    ResponseMessage:string='';
    dataset:any;
}
import { ClientContext } from "../context/ClientContext";
import { ServerContext } from "../context/ServerContext";
import { XMLEvent, XMLReader } from "../../../library";

export abstract class Handler {

    public init(context: ServerContext): void {

    }

    public isSingleSupported(server: ServerContext, client: ClientContext, event: XMLEvent): boolean {
        return false;
    }

    public isSupported(server: ServerContext, client: ClientContext, reader: XMLReader): boolean {
        return false;
    }

    public handleSingle(server: ServerContext, client: ClientContext, event: XMLEvent): void {

    }

    public handle(server: ServerContext, client: ClientContext, reader: XMLReader): void {

    }
}
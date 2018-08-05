import { Bind, IqRequestType, XML } from '../../../library';
import { ClientContext } from '../context/ClientContext';
import { ServerContext } from '../context/ServerContext';
import { Handler } from '../handler/Handler';

export class BindHandler extends Handler {

    protected bind = new Bind();

    public init(context: ServerContext): void {
        context.sessionFeatures.element(XML.create('bind').xmlns('', Bind.BIND_XMLNS));
    }

    public isIqSupported(server: ServerContext, client: ClientContext, type: IqRequestType, reader: XML): boolean {
        return this.bind.isRequest(reader);
    }

    public handleIq(server: ServerContext, client: ClientContext, reader: XML): void {
        const request = this.bind.readRequest(reader);
        client.jid.resource = request.resource ? request.resource : 'randomresource';

        client.writeXML(this.bind.createResponse({
            id: request.id,
            jid: client.jid,
        }));
    }
}

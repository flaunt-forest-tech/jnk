import { createMcpHandler } from '@vercel/mcp-adapter';
import { z } from 'zod';
/**
 * This file defines a Vercel MCP handler for managing kitchen styles.
 * It provides tools to list best selling styles and check stock availability.
 */
const handler = createMcpHandler(
  async (server) => {
    server.tool('bestStyles', 'provide a list of best selling styles', async () => ({
      content: [
        {
          type: 'text',
          text: `Best selling styles: White Shaker, Dove, Charcoal, Sage, Pebble and Pure`,
        },
      ],
    }));
    server.tool(
      'stockCheck',
      'Check stock availability for a style',
      {
        styleName: z.string().describe('Name of the style to check stock for'),
      },
      async ({ styleName }) => {
        // Replace with actual stock lookup logic or API call
        const isAvailable = ['White Shaker', 'Dove', 'Charcoal'].includes(styleName);
        const responseText = isAvailable
          ? `✅ Stock available for "${styleName} style".`
          : `❌ Sorry, "${styleName}" style is currently out of stock.`;

        return {
          content: [{ type: 'text', text: responseText }],
        };
      }
    );
  },
  {
    capabilities: {
      tools: {
        bestStyles: {
          description: 'provide a list of best selling styles',
        },
        stockCheck: {
          description: 'Check stock availability for a style',
          inputSchema: {
            styleName: {
              type: 'string',
              description: 'Name of the style to check stock for',
            },
          },
        },
      },
    },
  },
  {
    redisUrl: process.env.REDIS_URL,
    sseEndpoint: '/sse',
    streamableHttpEndpoint: '/mcp',
    verboseLogs: true,
    maxDuration: 60,
  }
);

export { handler as GET, handler as POST, handler as DELETE };

using Microsoft.AspNetCore.SignalR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SignalRDemo.Models
{
    public class ChatHub:Hub
    {
        public async Task SendMessage(string fromUser,string Message)
        {
            await Clients.All.SendAsync("ReceiveMessage", fromUser, Message);
        }
    }
}

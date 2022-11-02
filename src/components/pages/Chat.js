import React from 'react';
import '../../css/Chat.css';
import axios from 'axios';

function Chat() {
return (
    <div >
        <div class="container_chat">
<div class="menu">
            
        </div>
    <ol class="chat">
    <li class="other">
      <div class="msg">
          <div class="user">Marga<span class="range admin">Admin</span></div>
        <p>Dude</p>
        <p>Want to go dinner? </p>
        <time>20:17</time>
      </div>
    </li>
    <li class="self">
      <div class="msg">
        <p>Puff...</p>
        <p>I'm still doing the Góngora comment...</p>
        <p>Better other day</p>
        <time>20:18</time>
      </div>
    </li>
    <li class="other">
      <div class="msg">
          <div class="user">Brotons</div>
        <p>What comment about Góngora? </p>
        <time>20:18</time>
      </div>
    </li>
    <li class="self">
      <div class="msg">
        <p>The comment sent Marialu</p>
        <p>It's for tomorrow</p>
        <time>20:18</time>
      </div>
    </li>
    <li class="other">
      <div class="msg">
          <div class="user">Brotons</div>
        <p><emoji class="scream"></emoji></p>
        <p>Hand it to me! </p>
        <time>20:18</time>
      </div>
    </li>
    <li class="self">
      <div class="msg">
        <time>20:19</time>
      </div>
    </li>
    <li class="other">
      <div class="msg">
          <div class="user">Brotons</div>
        <p>Thank you!</p>
        <time>20:20</time>
      </div>
    </li>
        
    <li class="self">
      <div class="msg">
        <p>Who wants to play Minecraft?</p>
        <time>18:03</time>
      </div>
    </li>
    <li class="other">
      <div class="msg">
          <div class="user">Charo</div>
        <p>Come on, I didn't play it for four months</p>
        <time>18:07</time>
      </div>
    </li>
    <li class="self">
      <div class="msg">
        <p>Ehh, the launcher crash... </p>
        <time>18:08</time>
      </div>
    </li>
    <li class="other">
      <div class="msg">
          <div class="user">Charo</div>
        <p>Sure that is the base code</p>
        <p>I told it to Mojang</p>
        <time>18:08</time>
      </div>
    </li>
    <li class="self">
      <div class="msg">
        <p>It's a joke</p>
        <p>Moai attack!</p>
        <time>18:10</time>
      </div>
    </li>
    <li class="other">
      <div class="msg">
          <div class="user">Charo</div>
        <p>XD</p>
        <p>Heart for this awesome design!</p>
        <time>18:08</time>
      </div>
    </li>
    <li class="self">
      <div class="msg">
        <p>Heeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeellooooooooooooooooooooooooooooooo David </p>
        <time>18:09</time>
      </div>
    </li>
    <li class="other">
      <div class="msg">
          <div class="user">David</div>
          <p>What is that ?</p>
        <time>18:10</time>
      </div>
    </li>
        
    <li class="other">
      <div class="msg">
          <div class="user">Brotons</div>
        <p>Lol?</p>
        <time>18:12</time>
      </div>
    </li>
    <li class="other">
      <div class="msg">
          <div class="user">Marga<span class="range admin">Admin</span></div>
        <p>I'm boring...</p>
        <p>Who wants to do some logarithms? </p>
        <time>18:15</time>
      </div>
    </li>
    </ol>
<div class="typezone">
<form><textarea type="text" placeholder="Say something"></textarea><input type="submit" class="send" value=""/></form>
</div>
</div>
</div>
)}

export default Chat;

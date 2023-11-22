import envoi_msg_icon from "../../img/send_icon.png";
import messages_icon from "../../img/chatbox_icon.png";
import "./conversationBody.css";
export default function ConversationBody() {
  return (
    <>
      <img src={messages_icon} className="messages_icon" />

      <div className="chatBot_message">
        <span className="Bonjour vertical_center">Bonjour</span>
      </div>
      <div className="footer_chatBot">
        <input type="texte" className="saisie_chatBot" />
        <img src={envoi_msg_icon} className="envoi_message" />
      </div>
    </>
  );
}

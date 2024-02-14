import envoi_msg_icon from "../../img/envoyer_msg.svg";
import messages_icon from "../../img/chatbox_icon.svg";
import * as React from "react";
import "./conversationBody.css";
export default function ConversationBody() {
  const [messages, setMessages] = React.useState([
    {
      message: "Bonjour",
      timestamp: new Date().getTime(),
      date: new Date().toLocaleString(),
    },
    {
      message: "Bonjour",
      type: 1,
      timestamp: new Date().getTime(),
      date: new Date().toLocaleString(),
    },
    {
      message: `Contrairement à une opinion répandue, le Lorem Ipsum n'est pas simplement du texte aléatoire. Il trouve ses racines dans une oeuvre de la littérature latine classique datant de 45 av. J.-C., le rendant vieux de 2000 ans. Un professeur du Hampden-Sydney College, en Virginie, s'est intéressé à un des mots latins les plus obscurs, consectetur, extrait d'un passage du Lorem Ipsum, et en étudiant tous les usages de ce mot dans la littérature classique, découvrit la source incontestable du Lorem Ipsum. Il provient en fait des sections 1.10.32 et 1.10.33 du "De Finibus Bonorum et Malorum" (Des Suprêmes Biens et des Suprêmes Maux) de Cicéron. Cet ouvrage, très populaire pendant la Renaissance, est un traité sur la théorie de l'éthique. Les premières lignes du Lorem Ipsum, "Lorem ipsum dolor sit amet...", proviennent de la section 1.10.32.`,
      timestamp: new Date().getTime(),
      date: new Date().toLocaleString(),
    },
    {
      message: `Contrairement à une opinion répandue, le Lorem Ipsum n'est pas simplement du texte aléatoire. Il trouve ses racines dans une oeuvre de la littérature latine classique datant de 45 av. J.-C., le rendant vieux de 2000 ans. Un professeur du Hampden-Sydney College, en Virginie, s'est intéressé à un des mots latins les plus obscurs, consectetur, extrait d'un passage du Lorem Ipsum, et en étudiant tous les usages de ce mot dans la littérature classique, découvrit la source incontestable du Lorem Ipsum. Il provient en fait des sections 1.10.32 et 1.10.33 du "De Finibus Bonorum et Malorum" (Des Suprêmes Biens et des Suprêmes Maux) de Cicéron. Cet ouvrage, très populaire pendant la Renaissance, est un traité sur la théorie de l'éthique. Les premières lignes du Lorem Ipsum, "Lorem ipsum dolor sit amet...", proviennent de la section 1.10.32.`,
      type: 1,
      timestamp: new Date().getTime(),
      date: new Date().toLocaleString(),
    },
    {
      message: `Contrairement à une opinion répandue, le Lorem Ipsum n'est pas simplement du texte aléatoire. Il trouve ses racines dans une oeuvre de la littérature latine classique datant de 45 av. J.-C., le rendant vieux de 2000 ans. Un professeur du Hampden-Sydney College, en Virginie, s'est intéressé à un des mots latins les plus obscurs, consectetur, extrait d'un passage du Lorem Ipsum, et en étudiant tous les usages de ce mot dans la littérature classique, découvrit la source incontestable du Lorem Ipsum. Il provient en fait des sections 1.10.32 et 1.10.33 du "De Finibus Bonorum et Malorum" (Des Suprêmes Biens et des Suprêmes Maux) de Cicéron. Cet ouvrage, très populaire pendant la Renaissance, est un traité sur la théorie de l'éthique. Les premières lignes du Lorem Ipsum, "Lorem ipsum dolor sit amet...", proviennent de la section 1.10.32.`,
      timestamp: new Date().getTime(),
      date: new Date().toLocaleString(),
    },
    {
      message: `Contrairement à une opinion répandue, le Lorem Ipsum n'est pas simplement du texte aléatoire. Il trouve ses racines dans une oeuvre de la littérature latine classique datant de 45 av. J.-C., le rendant vieux de 2000 ans. Un professeur du Hampden-Sydney College, en Virginie, s'est intéressé à un des mots latins les plus obscurs, consectetur, extrait d'un passage du Lorem Ipsum, et en étudiant tous les usages de ce mot dans la littérature classique, découvrit la source incontestable du Lorem Ipsum. Il provient en fait des sections 1.10.32 et 1.10.33 du "De Finibus Bonorum et Malorum" (Des Suprêmes Biens et des Suprêmes Maux) de Cicéron. Cet ouvrage, très populaire pendant la Renaissance, est un traité sur la théorie de l'éthique. Les premières lignes du Lorem Ipsum, "Lorem ipsum dolor sit amet...", proviennent de la section 1.10.32.`,
      type: 1,
      timestamp: new Date().getTime(),
      date: new Date().toLocaleString(),
    },
  ]);
  const newMessage = React.useRef("");
  const dernierMessage = React.useRef("");

  const sendNewMsg = function (e) {
    setMessages([
      ...messages,
      {
        message: newMessage.current.value,
        timestamp: new Date().getTime(),
        date: new Date().toLocaleString(),
      },
    ]);
    // // Scroll to the newly added message
    // const newMessageElement = document.getElementById("dernier_message");
    // newMessageElement.scrollIntoView(true);

    newMessage.current.value = "";
  };
  React.useEffect(() => {
    dernierMessage.current.scrollTop = dernierMessage.current.scrollTopMax;
  }, [messages]);

  return (
    <>
      <div className="messages_icon">
        <>
          <img src={messages_icon} />
          <h1>Chat bot</h1>
        </>
      </div>

      <div className="chatBot_messages" ref={dernierMessage}>
        {messages.map((message) => (
          <div
            style={{
              width: "100%",
              textAlign: message.type ? "right" : "left",
            }}
          >
            <span
              key={"div" + message.timestamp}
              className={
                message.type
                  ? "chatBot_message_rep chatBot_message"
                  : "chatBot_message"
              }
            >
              <div
                style={{
                  textAlign: "justify",
                  padding: "7px",
                }}
              >
                {message.message}
              </div>
            </span>
          </div>
        ))}
      </div>

      <div className="footer_chatBot">
        <input type="text" className="saisie_chatBot" ref={newMessage} />
        <img
          src={envoi_msg_icon}
          className="envoi_message"
          onClick={sendNewMsg}
        />
      </div>
    </>
  );
}

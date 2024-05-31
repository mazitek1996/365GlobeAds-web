// FloatingChat.tsx
import Image from "next/image";

const FloatingChat = () => {
    const whatsappNumber = "+447479808754";
    const whatsappMessage = "Hello Nivarix Tech, I'd like to chat with you.";

    const handleChatClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        event.preventDefault();
        window.open(`https://api.whatsapp.com/send?phone=${encodeURIComponent(whatsappNumber)}&text=${encodeURIComponent(whatsappMessage)}`, '_blank');
    };

    return (
        <div className="fixed bottom-8 right-8 z-50">
            <a href={`https://api.whatsapp.com/send?phone=${encodeURIComponent(whatsappNumber)}&text=${encodeURIComponent(whatsappMessage)}`} target="_blank" onClick={handleChatClick}>
                <Image src="/static/images/icons/whatsapp.svg" alt="WhatsApp Icon" width={48} height={48} className="cursor-pointer" />
            </a>
        </div>
    );
};

export default FloatingChat;

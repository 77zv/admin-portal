import * as Modal from "@radix-ui/react-dialog";
import speech_bubble from "../assets/speech-bubble.svg";
import { Popup } from "./Popup";
import { useAuth } from "../contexts/AuthContext";
import { useMutation, useQuery } from "react-query";
import { cn } from "../utils/ui";
 

interface Props {
  phoneNumber: string;
  email: string;
}
// TODO: Move to types file
interface SimplifiedMessage {
  body: string;
  dateCreated: Date;
  dateSent: Date;
  dateUpdated: Date;
  from: string;
  to: string;
}

export const ContactPopup: React.FC<Props> = ({ phoneNumber, email }) => {
  const { token } = useAuth();

  const {
    data: messages,
    error,
    isLoading,
  } = useQuery(["fetchLastMessagesSent"], async () => {
    const transformedNumber = "1" + phoneNumber.replace(/\D/g, "");
    console.log(transformedNumber);
    const response = await fetch(
      `/api/messaging/get-text-conversation?targetNumber=${transformedNumber}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (!response.ok) {
      const data = await response.json();
      throw new Error(data.message);
    }

    return response.json();
  });
  const mockMessages: SimplifiedMessage[] = [
  {
    body: "Hey, how's it going?",
    dateCreated: new Date('2023-10-31T10:00:00'),
    dateSent: new Date('2023-10-31T10:00:10'),
    dateUpdated: new Date('2023-10-31T10:00:10'),
    from: '+1234567890',
    to: '+0987654321',
  },
  {
    body: "I'm good, thanks! What about you?",
    dateCreated: new Date('2023-10-31T10:05:00'),
    dateSent: new Date('2023-10-31T10:05:10'),
    dateUpdated: new Date('2023-10-31T10:05:10'),
    from: '+0987654321',
    to: '+1234567890',
  }
];

  return (
    <Popup
      trigger={
        <div className="flex justify-center hover:cursor-pointer hover:opacity-80">
          <img className="w-8" src={speech_bubble} alt="" />
        </div>
      }
      className={cn(
        "fixed left-[50%] top-[50%] w-full -translate-x-1/2 -translate-y-1/2 rounded-lg bg-softBeige p-8 md:w-[40rem]"
      )}
    >
      <>
        <Modal.Title className="m-0 flex justify-center text-xl font-bold text-newLeafGreen lg:px-16 lg:text-3xl">
          Contact Information
        </Modal.Title>
        <div className="h-4" />
        <div className="flex gap-1 lg:gap-4">
          <h2 className="shrink-0 font-semibold text-newLeafGreen lg:text-xl">
            Number:
          </h2>
          <p className="grow">
            <a href={`tel:${phoneNumber}`} className="text-blue-500 underline">
              {phoneNumber}
            </a>
          </p>
        </div>
        <div className="flex gap-1 lg:gap-4">
          <h2 className="shrink-0 font-semibold text-newLeafGreen lg:text-xl">
            Email:
          </h2>
          <p className="grow">
            <a href={`mailto:${email}`} className="text-blue-500 underline">
              {email}
            </a>
          </p>
        </div>
        <div className="h-4" />
        <div className="flex flex-col flex-auto flex-shrink-0 rounded-2xl bg-gray-100 h-full p-4">
          <div className="flex flex-col h-full overflow-x-auto mb-4">
            <div className="flex flex-col h-full">
              {
                // Display the mock messages for now
                mockMessages.map((msg, index) => (
                  <div key={index} className="mb-2">
                    <span className="font-bold">{msg.from}:</span>
                    <span className="ml-2">{msg.body}</span>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <Modal.Close
            className={cn(
              "rounded-full bg-newLeafGreen px-3 py-2 text-xs font-semibold text-white hover:brightness-150 focus:brightness-150",
              "lg:px-5 lg:py-3 lg:text-base lg:font-bold"
            )}
          >
            Done
          </Modal.Close>
        </div>
      </>
    </Popup>
  );
};

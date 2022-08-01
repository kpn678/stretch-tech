import React, { FC } from "react";
import "./CardPreview.css";
import Card from "../../types/Card.type";
import { Link } from "react-router-dom";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";

interface Props {
  currentCard: {
    from: string;
    to: string;
    message: string;
    quote: string;
    id: number;
    deleteCard: (id: number) => void;
  };
  saveCard: (card: Card) => void;
}

const CardPreview: FC<Props> = ({ currentCard, saveCard }) => {
  const printRef = React.useRef<HTMLDivElement>(null);
  const handleDownloadPdfTest = async () => {
    const element = printRef.current;
    const canvas = await html2canvas(element as HTMLDivElement);
    const data = canvas.toDataURL("image/png");
    const pdf = new jsPDF();
    const imgProperties = pdf.getImageProperties(data);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;
    pdf.addImage(data, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("print.pdf");
  };

  return (
    <section className="card-preview-page">
      <div className="card" ref={printRef}>
        <h2 className="to-field">To: {currentCard.to} </h2>
        <p className="quote-field">{currentCard.quote}</p>
        <p className="message-field">{currentCard.message}</p>
        <h2 className="from-field">From: {currentCard.from}</h2>
      </div>
      <div className="preview-buttons">
        <Link to="/create-card">
          <button className="new-card-button">New card!</button>
        </Link>
        <Link to="/saved-cards">
          <button
            className="save-card-button"
            onClick={() => saveCard(currentCard)}
          >
            Save my card!
          </button>
        </Link>
        <button
          className="pdf-button"
          type="button"
          onClick={handleDownloadPdfTest}
        >
          {" "}
          Print to PDF!{" "}
        </button>
      </div>
    </section>
  );
};

export default CardPreview;

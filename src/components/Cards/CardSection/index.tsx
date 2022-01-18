import React from "react";

interface SectionProps {
  title: string;
  value: string;
}

const CardSection: React.FC<SectionProps> = ({ title, value }) => (
  <p>
    <b>{`${title}: `}</b>
    {value}
  </p>
);

export default CardSection;

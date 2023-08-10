import React from "react";
import { Button, Spinner } from "react-bootstrap";

function BotonLoadComponent({
  type = "submit",
  variant,
  loading,
  onClick,
  children,
}) {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <Button type={type} variant={variant} disabled={loading} onClick={handleClick}>
      {loading && <Spinner animation="border" size="sm" />}
      {children}
    </Button>
  );
}

export default BotonLoadComponent;

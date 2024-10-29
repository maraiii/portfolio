import React from 'react';

export const Newsletter = ({ status, message, onValidated }) => {
  let emailInput;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (emailInput && emailInput.value) {
      onValidated({
        EMAIL: emailInput.value,
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        ref={(node) => (emailInput = node)}
        type="email"
        placeholder="Insira seu email"
      />
      <button type="submit">Inscrever</button>
      {status === "sending" && <div>Enviando...</div>}
      {status === "error" && <div style={{ color: 'red' }}>{message}</div>}
      {status === "success" && <div style={{ color: 'green' }}>Inscrição realizada com sucesso!</div>}
    </form>
  );
};

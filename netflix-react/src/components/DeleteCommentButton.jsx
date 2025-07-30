import { Button } from "react-bootstrap";

const DeleteCommentButton = ({ commentId, funComment }) => {

    const deleteComment = () => {
        fetch(`https://striveschool-api.herokuapp.com/api/comments/${commentId}`, {
            method: 'DELETE',
            headers: {
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODcwYzY5MDc4Y2RkZjAwMTU1ZDY3YTgiLCJpYXQiOjE3NTMzNTgyODYsImV4cCI6MTc1NDU2Nzg4Nn0.ntvzmv3QJspPXrDjgVOP7D-G-21XgtcpvxDGCEHrBgw"
            }
        })
            .then((response) => {
                if (response.ok) {
                    alert('COMMENTO ELIMINATO!');
                    // Lancio la funzione per aggiornare i commenti
                    funComment();
                } else {
                    throw new Error('Errore in fase di eliminazione');
                }
            })
            .catch((err) => {
                console.error('ERRORE ELIMINAZIONE:', err);
            });
    };

    return (
        <Button variant="danger" className="mt-2" onClick={deleteComment}>
            Elimina
        </Button>
    );
};

export default DeleteCommentButton;
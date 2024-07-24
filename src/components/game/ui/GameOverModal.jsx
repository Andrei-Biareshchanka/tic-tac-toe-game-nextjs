import Modal from "@/components/uikit/modal/Modal";
import Button from "@/components/uikit/button/Button";

export default function GameOverModal({winnerName, players}) {

  console.log('winnerName = ', winnerName)
  console.log('players = ', players)
  return (
    <Modal
        width="md"
        isOpen={winnerName}
        onClose={() => console.log("close")}
      >
        <Modal.Header>Game is over!</Modal.Header>

        <Modal.Body>
          <div className="text-sm">
            Winner: <span className="text-teal-600">{winnerName}</span>
          </div>
          <div className='items-center justify-between grid grid-cols-2 gap-3 my-2'>
            {players}
          </div>
        </Modal.Body>

        <Modal.Footer>
          <Button size="md" variant="outline">
            Close
          </Button>
          <Button size="md" variant="primary">
            Game again
          </Button>
        </Modal.Footer>
      </Modal>
  )
}
import Modal from "../ui/modal"

const productModal = () => {
    return (
        <Modal isOpen={isOpen} onClose={onclose} title="Add New Product" >
            <h5 className="">IniModal</h5>
        </Modal>
    )
}

export default productModal
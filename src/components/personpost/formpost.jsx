import { Form } from "react-bootstrap"
import './poststyle.css'

export default function FormInput() {

    return (
        <div className="contentall">
            <Form>
                <Form.Group className="mb-3 groupform" controlId="exampleForm.ControlInput1">
                    <Form.Label>Nombre</Form.Label>

                    <Form.Control type="text" placeholder="tu nombre" />
                </Form.Group>
                <Form.Group className="mb-3 groupform" controlId="exampleForm.ControlInput1">
                    <Form.Label>Apellido</Form.Label>
                    <Form.Control type="text" placeholder="tu apellido" />
                </Form.Group>
                <Form.Group className="mb-3 groupform" controlId="exampleForm.ControlInput1">
                    <Form.Label>Alias</Form.Label>
                    <Form.Control type="text" placeholder="tu alias" />
                </Form.Group>
                <Form.Group className="mb-3 groupform" controlId="exampleForm.ControlInput1">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="text" placeholder="name@example.com" />
                </Form.Group>
            </Form>
        </div>
    )

}
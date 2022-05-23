import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { BsArrowRightCircleFill } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';

const MangeProduct = ({product}) => {

    const { _id,description,name,images,price,supplierName,} =product;
    const navitate =useNavigate();
    const navigateManage = _id => {
      navitate(`/Inventory/${_id}`);
    }
    return (
        <div className='col-12 col-md-6 col-lg-3 card-box mb-3'>
        <Card className='w-100'>
<Card.Img variant="top" src={images} />
<Card.Body className=''>
<Card.Title>{name}</Card.Title>
<div className='d-flex justify-content-between pe-2'>
<h6>Supplier: <span>{supplierName}</span></h6>
<p className='price'> Price:{price}$</p>
</div>
<Card.Text className=''>
 {description.slice(0, 75)}...
</Card.Text>

{/* <Button onClick={() => navigateManage(_id)} className='update-btn' variant="primary">    update  <BsArrowRightCircleFill></BsArrowRightCircleFill></Button> */}
</Card.Body>
</Card>
    </div>
    );
};

export default MangeProduct;
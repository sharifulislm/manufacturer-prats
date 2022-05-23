import React from 'react';
import { Card } from 'react-bootstrap';

const Showmyitem = ({item}) => {
    console.log(item);
    const { Description,name,Images,Price,supplierName,} =item;
    return (
        <div className='col-12 col-md-6 col-lg-3 card-box mb-3'>
        <Card className='w-100'>
<Card.Img variant="top" src={Images} />
<Card.Body className=''>
<Card.Title>{name}</Card.Title>
<div className='d-flex justify-content-between pe-2'>
<h6>Supplier: <span>{supplierName}</span></h6>
<p className=''> Price:{Price}$</p>
</div>
<Card.Text className=''>{Description}

</Card.Text>

{/* <Button onClick={() => navigateManage(_id)} className='update-btn' variant="primary">    update  <BsArrowRightCircleFill></BsArrowRightCircleFill></Button> */}
</Card.Body>
</Card>
    </div>
    );
};

export default Showmyitem;
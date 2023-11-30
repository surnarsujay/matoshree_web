{
    galleryData.map((data, index) => (
        <div className="img-container" key={index}>
        <img src={`data:image/jpeg;base64,${data.head_Gallery}`}  className="card-img" alt="Image 2" style={{ height: "400px" ,marginTop:'100px'}} />
        </div>
    ))
}


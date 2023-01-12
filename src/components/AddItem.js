import React, { useState } from "react";

export default function AddItem(props) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const changeName = (e) => {
    setName(e.currentTarget.value);
  };
  const changePrice = (event) => {
    setPrice(event.currentTarget.value);
  };

  return (
    <form
      className="row"
      onSubmit={(e) => {
        e.preventDefault();
        if (name === "" || price === Number("")|| price<=0) alert("?????");
        else {
          props.addItem(name, Number(price));
          e.currentTarget.reset();
          setName("");
          setPrice(Number(""));
        }
      }}
    >
      <div className="mb-3 col-4">
        <label htmlFor="inputName" className="form-label">
          Name
        </label>
        <input
          type="text"
          className="form-control"
          id="inputName"
          aria-describedby="names"
          onChange={changeName}
        />
      </div>
      <div className="mb-3 col-4">
        <label htmlFor="inputPrice" className="form-label">
          Price
        </label>
        <input
          type="number"
          className="form-control"
          id="inputPrice"
          onChange={changePrice}
        />
      </div>

      <button type="add" className="btn btn-primary col-2">
        Add
      </button>
    </form>
  );
}

// import React from "react";

// class AddItem extends React.Component {
//     constructor(props){
//         super(props);
//         this.state = {
//             productName:"",
//             productPrice: 0,
//         }
//     }

//     render() {
//     return (
//       <form className="row" onSubmit={(e)=>{
//         e.preventDefault();
//         this.props.addItem(this.state.productName,Number(this.state.productPrice))
//       }}>
//         <div className="mb-3 col-4">
//           <label htmlFor="inputName" className="form-label">
//             Name
//           </label>
//           <input
//             type="text"
//             className="form-control"
//             id="inputName"
//             aria-describedby="names"
//             name="productName"
//             onChange={(e)=>{
//                 this.setState({productName: e.currentTarget.value})
//             }}
//           />
//         </div>
//         <div className="mb-3 col-4">
//           <label htmlFor="inputPrice" className="form-label">
//             Price
//           </label>
//           <input
//             type="number"
//             className="form-control"
//             id="inputPrice"
//             name="productPrice"
//             onChange={(e)=>{
//                 this.setState({productPrice: e.currentTarget.value})
//             }}
//           />
//         </div>

//         <button type="add" className="btn btn-primary col-4">
//           Add
//         </button>
//       </form>
//     );
//   }
// }

// export default AddItem;

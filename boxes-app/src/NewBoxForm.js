import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function NewBoxForm({ createBox }) {
  const [formData, setFormData] = useState({
    height: "",
    width: "",
    backgroundColor: "",
  });

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormData((formData) => ({ ...formData, [name]: value }));
  };

  const gatherInput = (evt) => {
    evt.preventDefault();
    createBox({ ...formData, id: uuid() });
    setFormData({ height: "", width: "", backgroundColor: "" });
  };
}

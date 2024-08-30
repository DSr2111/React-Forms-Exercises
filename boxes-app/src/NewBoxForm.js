import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function NewBoxForm({ createBox }) {
  const [formData, setFormData] = useState({
    height: "",
    width: "",
    backgroundColor: "",
  });
}

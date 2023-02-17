import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button } from "semantic-ui-react";
import { useForm } from "react-hook-form";

function LoginPage() {
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, formState } = useForm();
  const { errors } = formState;
  const navigate = useNavigate();

  const onSubmit = (event) => {
    setLoading(true);
    const loadData = async () => {
      await new Promise((r) => setTimeout(r, 5000));
    };
    loadData();
    navigate("/validateOTP");
  };

  useEffect(() => {
    const loadData = async () => {
      await new Promise((r) => setTimeout(r, 2000));
    };
    loadData();
  }, []);
  return (
    <div>
      <h1>Fancy Form</h1>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Field>
          <label for="input-address">ETH Address</label>
          <input
            id="input-address"
            {...register("address", {
              required: true,
              pattern: /(\b0x[a-f0-9]{40}\b)/g,
            })}
          />
        </Form.Field>
        {formState.errors.address && <p>Please enter a valid ETH Address</p>}
        <Form.Field>
          <label for="input-amount">Amount to send</label>
          <input
            id="input-amount"
            type="number"
            {...register("amount", { min: 0.00000001, required: true })}
          />
        </Form.Field>
        {errors.amount && <p>Please enter a valid ETH amount</p>}
        <Button type="submit" disabled={errors.amount && errors.address}>
          {loading && <div class="ui loader"></div>}
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default LoginPage;

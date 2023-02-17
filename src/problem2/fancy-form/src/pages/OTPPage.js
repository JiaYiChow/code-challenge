import React, { useState, useEffect } from "react";
import { Form, Button } from "semantic-ui-react";
import { useForm } from "react-hook-form";
import "./OTPPage.css";

export default function OTPPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (event) => {
    if (event.otp === "5566") {
      alert("Successfully sent tokens to user.");
    } else {
      alert("OTP Authentication failed");
    }
  };

  const [otp, setOTP] = useState("");
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(5);

  const resendOTP = () => {
    alert("Your OTP is 5566.");
    setMinutes(1);
    setSeconds(30);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }

      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(interval);
        } else {
          setSeconds(59);
          setMinutes(minutes - 1);
        }
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [seconds]);

  return (
    <div className="container">
      <div>
        <h1>Verify OTP</h1>
      </div>
      <p className="label">
        Please enter 5566 (assume OTP is sent to mobile device)
      </p>
      <Form>
        <Form.Field>
          <input
            type="number"
            name="otp"
            placeholder="Enter OTP"
            {...register("otp", { required: true })}
          />
        </Form.Field>
        <div className="countdown-text">
          {seconds > 0 || minutes > 0 ? (
            <p>
              Time Remaining: {minutes < 10 ? `0${minutes}` : minutes}:
              {seconds < 10 ? `0${seconds}` : seconds}
            </p>
          ) : (
            <p>
              Didn't recieve code? <u onClick={resendOTP}>Resend OTP</u>
            </p>
          )}
        </div>
        <Button
          type="submit"
          disabled={errors.otp}
          onClick={handleSubmit(onSubmit)}
        >
          Submit
        </Button>
      </Form>
    </div>
  );
}

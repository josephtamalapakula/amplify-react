/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { createServiceRequest } from "../graphql/mutations";
const client = generateClient();
export default function ServiceRequestCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    serviceRequestName: "",
    serviceRequestDescription: "",
    severity: "",
    resolutionDate: "",
    reporterName: "",
    contactInformation: "",
    currentLocation: "",
  };
  const [serviceRequestName, setServiceRequestName] = React.useState(
    initialValues.serviceRequestName
  );
  const [serviceRequestDescription, setServiceRequestDescription] =
    React.useState(initialValues.serviceRequestDescription);
  const [severity, setSeverity] = React.useState(initialValues.severity);
  const [resolutionDate, setResolutionDate] = React.useState(
    initialValues.resolutionDate
  );
  const [reporterName, setReporterName] = React.useState(
    initialValues.reporterName
  );
  const [contactInformation, setContactInformation] = React.useState(
    initialValues.contactInformation
  );
  const [currentLocation, setCurrentLocation] = React.useState(
    initialValues.currentLocation
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setServiceRequestName(initialValues.serviceRequestName);
    setServiceRequestDescription(initialValues.serviceRequestDescription);
    setSeverity(initialValues.severity);
    setResolutionDate(initialValues.resolutionDate);
    setReporterName(initialValues.reporterName);
    setContactInformation(initialValues.contactInformation);
    setCurrentLocation(initialValues.currentLocation);
    setErrors({});
  };
  const validations = {
    serviceRequestName: [{ type: "Required" }],
    serviceRequestDescription: [{ type: "Required" }],
    severity: [{ type: "Required" }],
    resolutionDate: [{ type: "Required" }],
    reporterName: [{ type: "Required" }],
    contactInformation: [{ type: "Required" }],
    currentLocation: [{ type: "Required" }],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          serviceRequestName,
          serviceRequestDescription,
          severity,
          resolutionDate,
          reporterName,
          contactInformation,
          currentLocation,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await client.graphql({
            query: createServiceRequest.replaceAll("__typename", ""),
            variables: {
              input: {
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "ServiceRequestCreateForm")}
      {...rest}
    >
      <TextField
        label="Service request name"
        isRequired={true}
        isReadOnly={false}
        value={serviceRequestName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              serviceRequestName: value,
              serviceRequestDescription,
              severity,
              resolutionDate,
              reporterName,
              contactInformation,
              currentLocation,
            };
            const result = onChange(modelFields);
            value = result?.serviceRequestName ?? value;
          }
          if (errors.serviceRequestName?.hasError) {
            runValidationTasks("serviceRequestName", value);
          }
          setServiceRequestName(value);
        }}
        onBlur={() =>
          runValidationTasks("serviceRequestName", serviceRequestName)
        }
        errorMessage={errors.serviceRequestName?.errorMessage}
        hasError={errors.serviceRequestName?.hasError}
        {...getOverrideProps(overrides, "serviceRequestName")}
      ></TextField>
      <TextField
        label="Service request description"
        isRequired={true}
        isReadOnly={false}
        value={serviceRequestDescription}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              serviceRequestName,
              serviceRequestDescription: value,
              severity,
              resolutionDate,
              reporterName,
              contactInformation,
              currentLocation,
            };
            const result = onChange(modelFields);
            value = result?.serviceRequestDescription ?? value;
          }
          if (errors.serviceRequestDescription?.hasError) {
            runValidationTasks("serviceRequestDescription", value);
          }
          setServiceRequestDescription(value);
        }}
        onBlur={() =>
          runValidationTasks(
            "serviceRequestDescription",
            serviceRequestDescription
          )
        }
        errorMessage={errors.serviceRequestDescription?.errorMessage}
        hasError={errors.serviceRequestDescription?.hasError}
        {...getOverrideProps(overrides, "serviceRequestDescription")}
      ></TextField>
      <TextField
        label="Severity"
        isRequired={true}
        isReadOnly={false}
        value={severity}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              serviceRequestName,
              serviceRequestDescription,
              severity: value,
              resolutionDate,
              reporterName,
              contactInformation,
              currentLocation,
            };
            const result = onChange(modelFields);
            value = result?.severity ?? value;
          }
          if (errors.severity?.hasError) {
            runValidationTasks("severity", value);
          }
          setSeverity(value);
        }}
        onBlur={() => runValidationTasks("severity", severity)}
        errorMessage={errors.severity?.errorMessage}
        hasError={errors.severity?.hasError}
        {...getOverrideProps(overrides, "severity")}
      ></TextField>
      <TextField
        label="Resolution date"
        isRequired={true}
        isReadOnly={false}
        value={resolutionDate}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              serviceRequestName,
              serviceRequestDescription,
              severity,
              resolutionDate: value,
              reporterName,
              contactInformation,
              currentLocation,
            };
            const result = onChange(modelFields);
            value = result?.resolutionDate ?? value;
          }
          if (errors.resolutionDate?.hasError) {
            runValidationTasks("resolutionDate", value);
          }
          setResolutionDate(value);
        }}
        onBlur={() => runValidationTasks("resolutionDate", resolutionDate)}
        errorMessage={errors.resolutionDate?.errorMessage}
        hasError={errors.resolutionDate?.hasError}
        {...getOverrideProps(overrides, "resolutionDate")}
      ></TextField>
      <TextField
        label="Reporter name"
        isRequired={true}
        isReadOnly={false}
        value={reporterName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              serviceRequestName,
              serviceRequestDescription,
              severity,
              resolutionDate,
              reporterName: value,
              contactInformation,
              currentLocation,
            };
            const result = onChange(modelFields);
            value = result?.reporterName ?? value;
          }
          if (errors.reporterName?.hasError) {
            runValidationTasks("reporterName", value);
          }
          setReporterName(value);
        }}
        onBlur={() => runValidationTasks("reporterName", reporterName)}
        errorMessage={errors.reporterName?.errorMessage}
        hasError={errors.reporterName?.hasError}
        {...getOverrideProps(overrides, "reporterName")}
      ></TextField>
      <TextField
        label="Contact information"
        isRequired={true}
        isReadOnly={false}
        value={contactInformation}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              serviceRequestName,
              serviceRequestDescription,
              severity,
              resolutionDate,
              reporterName,
              contactInformation: value,
              currentLocation,
            };
            const result = onChange(modelFields);
            value = result?.contactInformation ?? value;
          }
          if (errors.contactInformation?.hasError) {
            runValidationTasks("contactInformation", value);
          }
          setContactInformation(value);
        }}
        onBlur={() =>
          runValidationTasks("contactInformation", contactInformation)
        }
        errorMessage={errors.contactInformation?.errorMessage}
        hasError={errors.contactInformation?.hasError}
        {...getOverrideProps(overrides, "contactInformation")}
      ></TextField>
      <TextField
        label="Current location"
        isRequired={true}
        isReadOnly={false}
        value={currentLocation}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              serviceRequestName,
              serviceRequestDescription,
              severity,
              resolutionDate,
              reporterName,
              contactInformation,
              currentLocation: value,
            };
            const result = onChange(modelFields);
            value = result?.currentLocation ?? value;
          }
          if (errors.currentLocation?.hasError) {
            runValidationTasks("currentLocation", value);
          }
          setCurrentLocation(value);
        }}
        onBlur={() => runValidationTasks("currentLocation", currentLocation)}
        errorMessage={errors.currentLocation?.errorMessage}
        hasError={errors.currentLocation?.hasError}
        {...getOverrideProps(overrides, "currentLocation")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}

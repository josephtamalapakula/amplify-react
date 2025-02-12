/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ServiceRequestCreateFormInputValues = {
    serviceRequestName?: string;
    serviceRequestDescription?: string;
    severity?: string;
    resolutionDate?: string;
    reporterName?: string;
    contactInformation?: string;
    currentLocation?: string;
};
export declare type ServiceRequestCreateFormValidationValues = {
    serviceRequestName?: ValidationFunction<string>;
    serviceRequestDescription?: ValidationFunction<string>;
    severity?: ValidationFunction<string>;
    resolutionDate?: ValidationFunction<string>;
    reporterName?: ValidationFunction<string>;
    contactInformation?: ValidationFunction<string>;
    currentLocation?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ServiceRequestCreateFormOverridesProps = {
    ServiceRequestCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    serviceRequestName?: PrimitiveOverrideProps<TextFieldProps>;
    serviceRequestDescription?: PrimitiveOverrideProps<TextFieldProps>;
    severity?: PrimitiveOverrideProps<TextFieldProps>;
    resolutionDate?: PrimitiveOverrideProps<TextFieldProps>;
    reporterName?: PrimitiveOverrideProps<TextFieldProps>;
    contactInformation?: PrimitiveOverrideProps<TextFieldProps>;
    currentLocation?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ServiceRequestCreateFormProps = React.PropsWithChildren<{
    overrides?: ServiceRequestCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ServiceRequestCreateFormInputValues) => ServiceRequestCreateFormInputValues;
    onSuccess?: (fields: ServiceRequestCreateFormInputValues) => void;
    onError?: (fields: ServiceRequestCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ServiceRequestCreateFormInputValues) => ServiceRequestCreateFormInputValues;
    onValidate?: ServiceRequestCreateFormValidationValues;
} & React.CSSProperties>;
export default function ServiceRequestCreateForm(props: ServiceRequestCreateFormProps): React.ReactElement;

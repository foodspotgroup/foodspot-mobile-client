import React, { useCallback, useMemo } from "react";
import { View } from "react-native";
import { useStyles } from "./styles";
import { PageHeader } from "@app/components/common/PageHeader";
import { useNavigation } from "@react-navigation/native";
import Card from "@app/components/ui/Card";
import { useForm } from "react-hook-form";
import { FormInput, FormTabSelect } from "@app/components/forms";
import { acceptanceType } from "@app/utils/constants";
import Button from "@app/components/ui/Button";
import { getErrorMessage } from "@app/components/forms";
import { regexValidator } from "@app/utils/validators";
import { PlanningDetailsReduxProps } from "./container";
import SCREEN_NAMES from "@app/navigation/screen.names";

const acceptanceOptions = Object.keys(acceptanceType).map((item) => ({
  displayText: item,
  value: item,
}));

type PlanningDetailsProps = PlanningDetailsReduxProps;

const PlanningDetails: React.FC<PlanningDetailsProps> = ({
  pageTitle,
  createData,
  updateCreateData,
}) => {
  const styles = useStyles();
  const navigation = useNavigation();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const onSubmit = useCallback(
    async (data: Record<string, any>) => {
      updateCreateData({
        autoAccept: data.acceptanceType === acceptanceType.Automated,
        maxCapacity: parseInt(data.maxCapacity),
      });
      navigation.navigate(SCREEN_NAMES.common.events.ceContactDetails);
    },
    [updateCreateData, navigation],
  );

  return (
    <View style={styles.container}>
      <PageHeader
        id="planning-details"
        title={pageTitle || "Edit Event"}
        hasBack
        onBackPress={onBack}
      />
      <Card id="planning-details-form" title="Planning Details">
        <FormTabSelect
          color="primary"
          name="acceptanceType"
          control={control}
          label="Invitation Acceptance Behaviour"
          options={acceptanceOptions}
          rules={{ required: true }}
          errorMessage={getErrorMessage(
            "Acceptance Behaviour",
            errors.acceptanceType,
          )}
          selectedIndex={createData?.autoAccept ? 0 : 1}
        />
        <FormInput
          name="maxCapacity"
          control={control}
          type="number"
          label="Max capacity"
          rules={{
            required: true,
            pattern: regexValidator.wholeNumber,
          }}
          errorMessage={getErrorMessage("Max capacity", errors.maxCapacity)}
          placeholder="Max number of people"
          value={
            createData?.maxCapacity ? `${createData.maxCapacity}` : undefined
          }
        />
      </Card>
      <Button
        color="secondary"
        id="submit-btn"
        title="Next"
        onPress={handleSubmit(onSubmit)}
      />
    </View>
  );
};

export default PlanningDetails;
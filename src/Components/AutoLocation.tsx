import React, { useState } from "react";
import { Input } from "@chakra-ui/react";
import { usePlacesWidget } from "react-google-autocomplete";
type AUtolocation = {
  isSmallerThan900?: boolean;
  isSmallerThan1024?: boolean;
  sm?: string;
  fntSm?: string;
  fntLg?: string;
  fntMd?: string;
  lineSm?: string;
  lineLg?: string;
  lineMd?: string;
  fntW?: string;
  bg?: string;
  pholder?: string;
  lg?: string;
  md?: string;
  mtSm?: string;
  mtMd?: string;
  mtLg?: string;
  padding?: string;
  color?: string;
  bRadius?: string;
  plHolderText?: string;
  focusBorder?: string;
  getPlaces?: any;
};

export const AutoLocation = ({
  isSmallerThan900,
  isSmallerThan1024,
  plHolderText,
  sm,
  fntSm,
  fntLg,
  fntMd,
  lineSm,
  lineLg,
  lineMd,
  fntW,
  bg,
  pholder,
  lg,
  md,
  mtSm,
  mtMd,
  mtLg,
  padding,
  color,
  bRadius,
  focusBorder,
  getPlaces,
}: AUtolocation) => {
  const [places, setPlace] = useState<any>({});
  const { ref, autocompleteRef } = usePlacesWidget({
    apiKey: "",
    onPlaceSelected: (place) => setPlace(place),
    options: {
      types: ["(cities)"],
      componentRestrictions: { country: "ng" },
      fields: [
        "address_components",
        "geometry.location",
        "place_id",
        "formatted_address",
      ],
    },
  });

  return (
    <Input
      ref={ref}
      mt={[mtSm, mtMd, mtLg]}
      padding={padding}
      placeholder={plHolderText}
      onChange={() => getPlaces(places)}
      fontWeight={fntW}
      fontSize={isSmallerThan900 ? fntSm : isSmallerThan1024 ? fntMd : fntLg}
      lineHeight={
        isSmallerThan900 ? lineSm : isSmallerThan1024 ? lineMd : lineLg
      }
      maxWidth="100%"
      height={isSmallerThan900 ? sm : isSmallerThan1024 ? md : lg}
      background={bg}
      _placeholder={{
        color: pholder,
      }}
      color={color}
      borderRadius={bRadius}
      focusBorderColor={focusBorder}
    />
  );
};

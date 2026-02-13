
"use client";

import * as React from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

type WordLengthSelectorProps = {
  selectedLengths: number[];
  onSelectedLengthsChange: (lengths: number[]) => void;
};

const AVAILABLE_LENGTHS = [3, 4, 5];

export function WordLengthSelector({
  selectedLengths,
  onSelectedLengthsChange,
}: WordLengthSelectorProps) {
  const handleLengthChange = (length: number, checked: boolean) => {
    const newSelection = checked
      ? [...selectedLengths, length]
      : selectedLengths.filter((l) => l !== length);
    onSelectedLengthsChange(newSelection.sort());
  };

  return (
    <div className="flex items-center gap-4">
      {AVAILABLE_LENGTHS.map((length) => (
        <div key={length} className="flex items-center gap-2">
          <Checkbox
            id={`length-${length}`}
            checked={selectedLengths.includes(length)}
            onCheckedChange={(checked) => {
              handleLengthChange(length, !!checked);
            }}
          />
          <Label htmlFor={`length-${length}`} className="text-base">
            {length} letters
          </Label>
        </div>
      ))}
    </div>
  );
}

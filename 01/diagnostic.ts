class Counter {
  zeroes = 0;
  ones = 0;

  add(value: string): void {
    if (value == "0") {
      this.zeroes++;
    } else {
      this.ones++;
    }
  }
}

export class DiagnosticCalculator {
  readings: Counter[] = [];
  raw: string[] = [];

  add(reading: string): void {
    for (let i = 0; i < reading.length; i++) {
      if (this.readings[i] === undefined) {
        this.readings[i] = new Counter();
      }
      this.readings[i].add(reading.charAt(i));
    }
    this.raw.push(reading);
  }

  // For each position, check which value occurs more often and take it,
  // constructing a binary number - return the decimal representation of it.
  gammaRate(): number {
    let binaryNumber = "";

    for (const bit of this.readings) {
      if (bit.zeroes > bit.ones) {
        binaryNumber += "0";
      } else {
        binaryNumber += "1";
      }
    }
    return parseInt(binaryNumber, 2);
  }

  // For each position, check which value occurs less often and take it,
  // constructing a binary number - return the decimal representation of it.
  // Epsilon is binary opposite of gamma.
  epsilonRate(): number {
    let binaryNumber = "";

    for (const bit of this.readings) {
      if (bit.zeroes > bit.ones) {
        binaryNumber += "1";
      } else {
        binaryNumber += "0";
      }
    }
    return parseInt(binaryNumber, 2);
  }

  oxygenRating(): number {
    let matchingReadings = this.raw;
    for (let i = 0; i < this.readings.length; i++) {
      const reading = this.readings[i];
      const expectedBitValue = reading.zeroes > reading.ones ? "0" : "1";

      matchingReadings = matchingReadings.filter(
        (rawReading) => rawReading.charAt(i) == expectedBitValue,
      );

      if (matchingReadings.length > 1) {
        this.readings = [];
        this.raw = [];
        for (const rawReading of matchingReadings) {
          this.add(rawReading);
        }
      } else {
        break;
      }
    }

    return parseInt(matchingReadings[0], 2);
  }

  scrubberRating(): number {
    let matchingReadings = this.raw;
    for (let i = 0; i < this.readings.length; i++) {
      const reading = this.readings[i];
      const expectedBitValue = reading.zeroes <= reading.ones ? "0" : "1";

      matchingReadings = matchingReadings.filter(
        (rawReading) => rawReading.charAt(i) == expectedBitValue,
      );

      if (matchingReadings.length > 1) {
        this.readings = [];
        this.raw = [];
        for (const rawReading of matchingReadings) {
          this.add(rawReading);
        }
      } else {
        break;
      }
    }

    return parseInt(matchingReadings[0], 2);
  }
}

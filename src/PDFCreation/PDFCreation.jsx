import React, { useCallback, useState } from 'react';
import { Page, Text, Document, StyleSheet, PDFViewer, PDFDownloadLink, Font, Image } from '@react-pdf/renderer';
import JsBarcode from 'jsbarcode';

// Create styles
const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
  },
  title: {
    fontSize: 24,
    fontFamily: 'Oswald',
    marginLeft: 12,
    marginRight: 12,
    marginBottom: 8,
  },
  userMeta: {
    fontSize: 12,
    marginLeft: 12,
    marginRight: 12,
    marginBottom: 8,
  },
  appointmentHeader: {
    fontSize: 12,
    marginLeft: 12,
    marginRight: 12,
    marginBottom: 8,
  },
  appointment: {
    fontSize: 12,
    marginLeft: 12,
    marginRight: 12,
    marginBottom: 8,
  },
  subHeading: {
    fontSize: 18,
    margin: 12,
    fontFamily: 'Oswald'
  },

  subtitle: {
    fontSize: 18,
    margin: 12,
    fontFamily: 'Oswald'
  },

  imageStyle: {
    marginVertical: 2,
    width: '300px',
    height: 'auto'
  },

  pageNumber: {
    position: 'absolute',
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: 'center',
    color: 'grey',
  },
});

// Create Document Component
const MyDocument = () => {
  const [imageUrl, setImageUrl] = useState(null);
  const ref = useCallback((wrapper) => {
    if (!wrapper) return;
    const canvas = document.createElement('canvas');
    JsBarcode(canvas, 'Hi world!', {
      displayValue: false
    });
    console.log('canvas', canvas);
    console.log('canvas', canvas.toDataURL('image/jpg', 1));
    setImageUrl(canvas.toDataURL('image/jpg', 0.5));
  }, []);

  return (
    <>
      <div ref={ref}></div>
      {
        imageUrl
        &&
        <Document>
          <Page style={styles.body}>
            <Text style={styles.title}>Time Jones</Text>
            <Text style={styles.userMeta}>Age : </Text>
            <Text style={styles.userMeta}>Designation : </Text>
            <Text style={styles.userMeta}>Location : </Text>
            <Image
              style={styles.imageStyle}
              src={imageUrl}
            />
            <Text style={styles.subHeading}>
              Appointment Scheduled
            </Text>
            <Text style={styles.appointmentHeader}>You appointment has been Scheduled, your registration number is : {234123412342314234}</Text>
            <Text style={styles.appointment}>Vaccination Center : Some center</Text>
            <Text style={styles.appointment}>Date : 19-10-2021</Text>
            <Text style={styles.appointment}>Time : 10AM - 12PM</Text>
            <Text style={styles.subHeading}>
              Pre-vaccination questionnaire
            </Text>
            <Text style={styles.pageNumber} render={({ pageNumber, totalPages }) => (
              `${pageNumber} / ${totalPages}`
            )} fixed />
          </Page>
        </Document>
      }
    </>
  );
};

Font.register({
  family: 'Oswald',
  src: 'https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf'
});

const PDFCreation = () => (
  <div className="container " style={{ height : '100vh' }} >
    <PDFViewer height="100%" width="100%">
      <MyDocument />
    </PDFViewer>
    <PDFDownloadLink document={<MyDocument />} fileName="somename.pdf">
      {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download now!')}
    </PDFDownloadLink>
  </div>

);

export default PDFCreation;

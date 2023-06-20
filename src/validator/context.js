export const contexts = {
  "https://www.w3.org/2018/credentials/examples/v1": {
    "@context": [
      {
        "@version": 1.1,
      },
      {
        ex: "https://example.org/examples#",
        schema: "http://schema.org/",
        rdf: "http://www.w3.org/1999/02/22-rdf-syntax-ns#",

        "3rdPartyCorrelation": "ex:3rdPartyCorrelation",
        AllVerifiers: "ex:AllVerifiers",
        Archival: "ex:Archival",
        BachelorDegree: "ex:BachelorDegree",
        Child: "ex:Child",
        CLCredentialDefinition2019: "ex:CLCredentialDefinition2019",
        CLSignature2019: "ex:CLSignature2019",
        IssuerPolicy: "ex:IssuerPolicy",
        HolderPolicy: "ex:HolderPolicy",
        Mother: "ex:Mother",
        RelationshipCredential: "ex:RelationshipCredential",
        UniversityDegreeCredential: "ex:UniversityDegreeCredential",
        AlumniCredential: "ex:AlumniCredential",
        DisputeCredential: "ex:DisputeCredential",
        PrescriptionCredential: "ex:PrescriptionCredential",
        ZkpExampleSchema2018: "ex:ZkpExampleSchema2018",

        issuerData: "ex:issuerData",
        attributes: "ex:attributes",
        signature: "ex:signature",
        signatureCorrectnessProof: "ex:signatureCorrectnessProof",
        primaryProof: "ex:primaryProof",
        nonRevocationProof: "ex:nonRevocationProof",

        alumniOf: { "@id": "schema:alumniOf", "@type": "rdf:HTML" },
        child: { "@id": "ex:child", "@type": "@id" },
        degree: "ex:degree",
        degreeType: "ex:degreeType",
        degreeSchool: "ex:degreeSchool",
        college: "ex:college",
        name: { "@id": "schema:name", "@type": "rdf:HTML" },
        givenName: "schema:givenName",
        familyName: "schema:familyName",
        parent: { "@id": "ex:parent", "@type": "@id" },
        referenceId: "ex:referenceId",
        documentPresence: "ex:documentPresence",
        evidenceDocument: "ex:evidenceDocument",
        spouse: "schema:spouse",
        subjectPresence: "ex:subjectPresence",
        verifier: { "@id": "ex:verifier", "@type": "@id" },
        currentStatus: "ex:currentStatus",
        statusReason: "ex:statusReason",
        prescription: "ex:prescription",
      },
    ],
  },
  "https://w3id.org/security/suites/ed25519-2020/v1": {
    "@context": {
      id: "@id",
      type: "@type",
      "@protected": true,
      proof: {
        "@id": "https://w3id.org/security#proof",
        "@type": "@id",
        "@container": "@graph",
      },
      Ed25519VerificationKey2020: {
        "@id": "https://w3id.org/security#Ed25519VerificationKey2020",
        "@context": {
          "@protected": true,
          id: "@id",
          type: "@type",
          controller: {
            "@id": "https://w3id.org/security#controller",
            "@type": "@id",
          },
          revoked: {
            "@id": "https://w3id.org/security#revoked",
            "@type": "http://www.w3.org/2001/XMLSchema#dateTime",
          },
          publicKeyMultibase: {
            "@id": "https://w3id.org/security#publicKeyMultibase",
            "@type": "https://w3id.org/security#multibase",
          },
        },
      },
      Ed25519Signature2020: {
        "@id": "https://w3id.org/security#Ed25519Signature2020",
        "@context": {
          "@protected": true,
          id: "@id",
          type: "@type",
          challenge: "https://w3id.org/security#challenge",
          created: {
            "@id": "http://purl.org/dc/terms/created",
            "@type": "http://www.w3.org/2001/XMLSchema#dateTime",
          },
          domain: "https://w3id.org/security#domain",
          expires: {
            "@id": "https://w3id.org/security#expiration",
            "@type": "http://www.w3.org/2001/XMLSchema#dateTime",
          },
          nonce: "https://w3id.org/security#nonce",
          proofPurpose: {
            "@id": "https://w3id.org/security#proofPurpose",
            "@type": "@vocab",
            "@context": {
              "@protected": true,
              id: "@id",
              type: "@type",
              assertionMethod: {
                "@id": "https://w3id.org/security#assertionMethod",
                "@type": "@id",
                "@container": "@set",
              },
              authentication: {
                "@id": "https://w3id.org/security#authenticationMethod",
                "@type": "@id",
                "@container": "@set",
              },
              capabilityInvocation: {
                "@id": "https://w3id.org/security#capabilityInvocationMethod",
                "@type": "@id",
                "@container": "@set",
              },
              capabilityDelegation: {
                "@id": "https://w3id.org/security#capabilityDelegationMethod",
                "@type": "@id",
                "@container": "@set",
              },
              keyAgreement: {
                "@id": "https://w3id.org/security#keyAgreementMethod",
                "@type": "@id",
                "@container": "@set",
              },
            },
          },
          proofValue: {
            "@id": "https://w3id.org/security#proofValue",
            "@type": "https://w3id.org/security#multibase",
          },
          verificationMethod: {
            "@id": "https://w3id.org/security#verificationMethod",
            "@type": "@id",
          },
        },
      },
    },
  },
  "https://w3id.org/security/suites/jws-2020/v1": {
    "@context": {
      privateKeyJwk: {
        "@id": "https://w3id.org/security#privateKeyJwk",
        "@type": "@json",
      },
      JsonWebKey2020: {
        "@id": "https://w3id.org/security#JsonWebKey2020",
        "@context": {
          "@protected": true,
          id: "@id",
          type: "@type",
          publicKeyJwk: {
            "@id": "https://w3id.org/security#publicKeyJwk",
            "@type": "@json",
          },
        },
      },
      JsonWebSignature2020: {
        "@id": "https://w3id.org/security#JsonWebSignature2020",
        "@context": {
          "@protected": true,

          id: "@id",
          type: "@type",

          challenge: "https://w3id.org/security#challenge",
          created: {
            "@id": "http://purl.org/dc/terms/created",
            "@type": "http://www.w3.org/2001/XMLSchema#dateTime",
          },
          domain: "https://w3id.org/security#domain",
          expires: {
            "@id": "https://w3id.org/security#expiration",
            "@type": "http://www.w3.org/2001/XMLSchema#dateTime",
          },
          jws: "https://w3id.org/security#jws",
          nonce: "https://w3id.org/security#nonce",
          proofPurpose: {
            "@id": "https://w3id.org/security#proofPurpose",
            "@type": "@vocab",
            "@context": {
              "@protected": true,

              id: "@id",
              type: "@type",

              assertionMethod: {
                "@id": "https://w3id.org/security#assertionMethod",
                "@type": "@id",
                "@container": "@set",
              },
              authentication: {
                "@id": "https://w3id.org/security#authenticationMethod",
                "@type": "@id",
                "@container": "@set",
              },
              capabilityInvocation: {
                "@id": "https://w3id.org/security#capabilityInvocationMethod",
                "@type": "@id",
                "@container": "@set",
              },
              capabilityDelegation: {
                "@id": "https://w3id.org/security#capabilityDelegationMethod",
                "@type": "@id",
                "@container": "@set",
              },
              keyAgreement: {
                "@id": "https://w3id.org/security#keyAgreementMethod",
                "@type": "@id",
                "@container": "@set",
              },
            },
          },
          verificationMethod: {
            "@id": "https://w3id.org/security#verificationMethod",
            "@type": "@id",
          },
        },
      },
    },
  },
};

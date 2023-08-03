import {
  BlobServiceClient,
  ContainerClient,
  BlobItem,
  BlobDownloadResponseModel,
} from "@azure/storage-blob";

const connectionString = "your-azure-storage-connection-string";
const containerName = "your-container-name";

const blobServiceClient =
  BlobServiceClient.fromConnectionString(connectionString);
const containerClient: ContainerClient =
  blobServiceClient.getContainerClient(containerName);

// Function to upload a file with metadata
export async function uploadFileWithMetadata(
  fileName: string,
  fileData: Uint8Array,
  metadata: { [key: string]: string }
) {
  const blockBlobClient = containerClient.getBlockBlobClient(fileName);
  await blockBlobClient.uploadData(fileData, {
    metadata,
    blobHTTPHeaders: {
      blobContentType: "application/octet-stream",
    },
  });
  console.log("File uploaded successfully!");
}

// Function to get all blobs with metadata
export async function getAllBlobsWithMetadata(): Promise<BlobItem[]> {
  const blobs: BlobItem[] = [];
  for await (const blob of containerClient.listBlobsFlat({
    includeMetadata: true,
  })) {
    blobs.push(blob);
  }
  return blobs;
}

// Function to download a file
export async function downloadFile(
  fileName: string
): Promise<BlobDownloadResponseModel> {
  const blobClient = containerClient.getBlobClient(fileName);
  const response = await blobClient.download(0);
  return response;
}

// Function to update metadata for a specific blob
export async function updateMetadata(
  fileName: string,
  metadata: { [key: string]: string }
) {
  const blobClient = containerClient.getBlobClient(fileName);
  await blobClient.setMetadata(metadata);
  console.log("Metadata updated successfully!");
}

// Function to delete a specific blob
export async function deleteBlob(fileName: string) {
  const blobClient = containerClient.getBlobClient(fileName);
  await blobClient.delete();
  console.log("Blob deleted successfully!");
}

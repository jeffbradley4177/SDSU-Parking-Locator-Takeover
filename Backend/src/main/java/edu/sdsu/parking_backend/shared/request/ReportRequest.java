package edu.sdsu.parking_backend.shared.request;

public record ReportRequest(int lotId, String statusReported, int userId) {}
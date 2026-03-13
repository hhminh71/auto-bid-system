// File này lưu trữ toàn bộ cấu hình biểu mẫu của hệ thống
// Cú pháp: window.APP_CONFIG = { ... nội dung cây logic ... };

window.APP_CONFIG = {
    'Dưới 50 triệu': {
        'Giai đoạn chuẩn bị': [
            { id: 'd50_1', name: '01. Tờ trình phê duyệt chủ trương', filename: 'd50_01_ToTrinhChuTruong.docx' },
            { id: 'd50_2', name: '02. Báo cáo mua sắm dưới 50 triệu', filename: 'd50_02_BaoCaoMuaSam.docx' }
        ],
        'Giai đoạn thực hiện': [
            { id: 'd50_3', name: '03. Hợp đồng', filename: 'd50_03_HopDong.docx' }
        ]
    },
    'Chào giá hạn chế': {
        'Giai đoạn chuẩn bị': [
            { id: 'cghc_1', name: '01. Tờ trình phê duyệt chủ trương', filename: 'cghc_01_ToTrinhChuTruong.docx' },
            { id: 'cghc_2', name: '02. Báo cáo mua sắm dưới chào giá hạn chế', filename: 'cghc_02_BaoCaoMuaSam.docx' },
            { id: 'cghc_3', name: '03. Thông báo mời chào giá', filename: 'cghc_03_ThongBaoMoiChaoGia.docx' }
        ],
        'Giai đoạn thực hiện': [
            { id: 'cghc_4', name: '04. Biên bản mở thư chào giá', filename: 'cghc_04_BB_MoThuChaoGia.docx' },
            { id: 'cghc_5', name: '05. Biên bản đánh giá hồ sơ chào giá', filename: 'cghc_05_BB_DanhGiaHSCG.docx' },
            { id: 'cghc_6', name: '06. Biên bản thương thảo hợp đồng', filename: 'cghc_06_BB_ThuongThaoHD.docx' },
            { id: 'cghc_7', name: '07. Báo cáo đánh giá hồ sơ chào giá', filename: 'cghc_07_BC_DanhGiaHSCG.docx' },
            { id: 'cghc_8', name: '08. Thông báo Kết quả chào giá', filename: 'cghc_08_TB_KQLCNT.docx' },
            { id: 'cghc_9', name: '09. Hợp đồng', filename: 'cghc_09_HopDong.docx' }
        ]
    },
    'Chào giá rộng rãi': {
        'Giai đoạn chuẩn bị': [
            { id: 'cgrr_1', name: '01. Tờ trình phê duyệt chủ trương', filename: 'cgrr_01_ToTrinhChuTruong.docx' },
            { id: 'cgrr_2', name: '02. Báo cáo mua sắm dưới chào giá rộng rãi', filename: 'cgrr_02_BaoCaoMuaSam.docx' },
            { id: 'cgrr_3', name: '03. Thông báo mời chào giá', filename: 'cgrr_03_ThongBaoMoiChaoGia.docx' },
            { id: 'cgrr_4', name: '04. Nội dung đăng báo địa phương', filename: 'cgrr_04_NoiDungDangBao.docx' }
        ],
        'Giai đoạn thực hiện': [
            { id: 'cgrr_5', name: '05. Biên bản mở thư chào giá', filename: 'cgrr_05_BB_MoThuChaoGia.docx' },
            { id: 'cgrr_6', name: '06. Biên bản đánh giá hồ sơ chào giá', filename: 'cgrr_06_BB_DanhGiaHSCG.docx' },
            { id: 'cgrr_7', name: '07. Biên bản thương thảo hợp đồng', filename: 'cgrr_07_BB_ThuongThaoHD.docx' },
            { id: 'cgrr_8', name: '08. Báo cáo đánh giá hồ sơ chào giá', filename: 'cgrr_08_BC_DanhGiaHSCG.docx' },
            { id: 'cgrr_9', name: '09. Thông báo Kết quả chào giá', filename: 'cgrr_09_TB_KQLCNT.docx' },
            { id: 'cgrr_10', name: '10. Hợp đồng', filename: 'cgrr_10_HopDong.docx' }
        ]
    },
    'Chỉ định thầu rút gọn': {
        'Giai đoạn chuẩn bị': [
            { id: 'cdtrg_1', name: '01. Tờ trình phê duyệt Kế hoạch LCNT', filename: 'cdtrg_01_ToTrinh_KHLCNT.docx' },
            { id: 'cdtrg_2', name: '02. Quyết định phê duyệt Kế hoạch LCNT', filename: 'cdtrg_02_QD_KHLCNT.docx' },
            { id: 'cdtrg_3', name: '03. Công văn gửi Nhà thầu mời thương thảo', filename: 'cdtrg_03_CV_MoiThuongThao.docx' }
        ],
        'Giai đoạn thực hiện': [
            { id: 'cdtrg_4', name: '04. Biên bản thương thảo hợp đồng', filename: 'cdtrg_04_BB_ThuongThaoHD.docx' },
            { id: 'cdtrg_5', name: '05. Thông báo kết quả Chỉ định thầu', filename: 'cdtrg_05_TB_KQLCNT.docx' },
            { id: 'cdtrg_6', name: '06. Hợp đồng', filename: 'cdtrg_06_HopDong.docx' }
        ]
    },
    'Đấu thầu rộng rãi': {
        'Giai đoạn Chuẩn bị Hồ sơ mời thầu (E-HSMT)': [
            { id: 'dtrr_1', name: '01. Quyết định thành lập Tổ chuyên gia và Tổ thẩm định', filename: 'dtrr_01_QD_ThanhLapTo.docx' },
            { id: 'dtrr_2', name: '02. Biên bản họp Tổ chuyên gia (thông qua E-HSMT)', filename: 'dtrr_02_BB_HopTCG.docx' },
            { id: 'dtrr_3', name: '03. Tờ trình đề nghị thẩm định, phê duyệt E-HSMT', filename: 'dtrr_03_TTr_PheDuyetHSMT.docx' },
            { id: 'dtrr_4', name: '04. Biên bản họp Tổ thẩm định', filename: 'dtrr_04_BB_HopTTD.docx' },
            { id: 'dtrr_5', name: '05. Báo cáo thẩm định E-HSMT', filename: 'dtrr_05_BC_ThamDinhHSMT.docx' },
            { id: 'dtrr_6', name: '06. Quyết định phê duyệt E-HSMT', filename: 'dtrr_06_QD_PheDuyetHSMT.docx' }
        ],
        'Giai đoạn Tổ chức Lựa chọn nhà thầu': [
            { id: 'dtrr_7', name: '07. Thông báo mời thầu (TBMT)', filename: 'dtrr_07_ThongBaoMoiThau.docx' },
            { id: 'dtrr_8', name: '08. Văn bản làm rõ E-HSMT (nếu có)', filename: 'dtrr_08_VB_LamRoHSMT.docx' },
            { id: 'dtrr_9', name: '09. Quyết định sửa đổi E-HSMT (nếu có)', filename: 'dtrr_09_QD_SuaDoiHSMT.docx' },
            { id: 'dtrr_10', name: '10. Biên bản mở thầu', filename: 'dtrr_10_BB_MoThau.docx' }
        ],
        'Giai đoạn Đánh giá Hồ sơ dự thầu (E-HSDT)': [
            { id: 'dtrr_11', name: '11. Biên bản họp Tổ chuyên gia (phân công nhiệm vụ)', filename: 'dtrr_11_BB_HopTCG_PhanCong.docx' },
            { id: 'dtrr_12', name: '12. Văn bản yêu cầu làm rõ E-HSDT (nếu có)', filename: 'dtrr_12_VB_LamRoHSDT.docx' },
            { id: 'dtrr_13', name: '13. Biên bản họp Tổ chuyên gia (thông qua kết quả)', filename: 'dtrr_13_BB_HopTCG_KetQua.docx' },
            { id: 'dtrr_14', name: '14. Báo cáo đánh giá E-HSDT', filename: 'dtrr_14_BC_DanhGiaHSDT.docx' }
        ],
        'Giai đoạn Thương thảo và Hoàn thiện hợp đồng': [
            { id: 'dtrr_15', name: '15. Văn bản mời thương thảo/hoàn thiện hợp đồng', filename: 'dtrr_15_VB_MoiThuongThao.docx' },
            { id: 'dtrr_16', name: '16. Biên bản thương thảo hợp đồng', filename: 'dtrr_16_BB_ThuongThaoHD.docx' },
            { id: 'dtrr_17', name: '17. Biên bản hoàn thiện hợp đồng', filename: 'dtrr_17_BB_HoanThienHD.docx' }
        ],
        'Giai đoạn Thẩm định và Phê duyệt Kết quả LCNT': [
            { id: 'dtrr_18', name: '18. Tờ trình đề nghị thẩm định, phê duyệt Kết quả LCNT', filename: 'dtrr_18_TTr_PheDuyetKQLCNT.docx' },
            { id: 'dtrr_19', name: '19. Biên bản họp Tổ thẩm định', filename: 'dtrr_19_BB_HopTTD_KQLCNT.docx' },
            { id: 'dtrr_20', name: '20. Báo cáo thẩm định Kết quả LCNT', filename: 'dtrr_20_BC_ThamDinhKQLCNT.docx' },
            { id: 'dtrr_21', name: '21. Quyết định phê duyệt Kết quả LCNT', filename: 'dtrr_21_QD_PheDuyetKQLCNT.docx' }
        ],
        'Giai đoạn Công khai và Ký kết hợp đồng': [
            { id: 'dtrr_22', name: '22. Thông báo Kết quả LCNT', filename: 'dtrr_22_TB_KQLCNT.docx' },
            { id: 'dtrr_23', name: '23. Hợp đồng kinh tế', filename: 'dtrr_23_HopDong.docx' }
        ]
    }
};

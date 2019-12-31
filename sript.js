let json = {
  intents: [
    {
      tag: "address",
      patterns: "Địa chỉ ở đâu vậy",
      responses:
        "shop hiện có duy nhất một chi nhánh ở số 144 Cầu Giấy, Hà Nội nhé"
    },
    {
      tag: "address",
      patterns: "Shop ở đâu thế",
      responses:
        "shop hiện có duy nhất một chi nhánh ở số 144 Cầu Giấy, Hà Nội nhé"
    },
    {
      tag: "address",
      patterns: "Shop ở đây vậy",
      responses:
        "shop hiện có duy nhất một chi nhánh ở số 144 Cầu Giấy, Hà Nội nhé"
    },
    {
      tag: "address",
      patterns: "cửa hàng ở đâu nhỉ",
      responses:
        "shop hiện có duy nhất một chi nhánh ở số 144 Cầu Giấy, Hà Nội nhé"
    },
    {
      tag: "address",
      patterns: "địa chỉ ở đâu vậy bạn",
      responses:
        "shop hiện có duy nhất một chi nhánh ở số 144 Cầu Giấy, Hà Nội nhé"
    },
    {
      tag: "address",
      patterns: "ở đâu",
      responses:
        "shop hiện có duy nhất một chi nhánh ở số 144 Cầu Giấy, Hà Nội nhé"
    },
    {
      tag: "address",
      patterns: "địa chỉ",
      responses:
        "shop hiện có duy nhất một chi nhánh ở số 144 Cầu Giấy, Hà Nội nhé"
    },
    {
      tag: "address",
      patterns: "cua hang ở đâu vay nhi",
      responses:
        "shop hiện có duy nhất một chi nhánh ở số 144 Cầu Giấy, Hà Nội nhé"
    },
    {
      tag: "address",
      patterns: "dia chi ",
      responses:
        "shop hiện có duy nhất một chi nhánh ở số 144 Cầu Giấy, Hà Nội nhé"
    },
    {
      tag: "address",
      patterns: "dia chi o dau v",
      responses:
        "shop hiện có duy nhất một chi nhánh ở số 144 Cầu Giấy, Hà Nội nhé"
    },
    {
      tag: "address",
      patterns: "Có chi nhánh ở Hà Nội không",
      responses:
        "shop hiện có duy nhất một chi nhánh ở số 144 Cầu Giấy, Hà Nội nhé"
    },
    {
      tag: "address",
      patterns: "co chi nhanh o HN khong",
      responses:
        "shop hiện có duy nhất một chi nhánh ở số 144 Cầu Giấy, Hà Nội nhé"
    },
    {
      tag: "address",
      patterns: "co chi nhanh o HCM khong",
      responses:
        "shop hiện có duy nhất một chi nhánh ở số 144 Cầu Giấy, Hà Nội nhé"
    },
    {
      tag: "address",
      patterns: "Có chi nhánh ở hồ chí minh không",
      responses:
        "shop hiện có duy nhất một chi nhánh ở số 144 Cầu Giấy, Hà Nội nhé"
    },
    {
      tag: "address",
      patterns: "co chi nhanh o ha noi khong",
      responses:
        "shop hiện có duy nhất một chi nhánh ở số 144 Cầu Giấy, Hà Nội nhé"
    },
    {
      tag: "address",
      patterns: "o dau ha noi vay",
      responses:
        "shop hiện có duy nhất một chi nhánh ở số 144 Cầu Giấy, Hà Nội nhé"
    },
    {
      tag: "address",
      patterns: "o dau v",
      responses:
        "shop hiện có duy nhất một chi nhánh ở số 144 Cầu Giấy, Hà Nội nhé"
    },
    {
      tag: "address",
      patterns: "dia chi Ha noi",
      responses:
        "shop hiện có duy nhất một chi nhánh ở số 144 Cầu Giấy, Hà Nội nhé"
    },
    {
      tag: "address",
      patterns: "Địa chỉ ở đây v",
      responses:
        "shop hiện có duy nhất một chi nhánh ở số 144 Cầu Giấy, Hà Nội nhé"
    },
    {
      tag: "address",
      patterns: "Địa chỉ gần nhất ",
      responses:
        "shop hiện có duy nhất một chi nhánh ở số 144 Cầu Giấy, Hà Nội nhé"
    },
    {
      tag: "address",
      patterns: "chi nhánh gần nhất",
      responses:
        "shop hiện có duy nhất một chi nhánh ở số 144 Cầu Giấy, Hà Nội nhé"
    },
    {
      tag: "address",
      patterns: "Có gần Cầu giấy không",
      responses:
        "shop hiện có duy nhất một chi nhánh ở số 144 Cầu Giấy, Hà Nội nhé"
    },
    {
      tag: "address",
      patterns: "có gần cầu giấy kh",
      responses:
        "shop hiện có duy nhất một chi nhánh ở số 144 Cầu Giấy, Hà Nội nhé"
    },
    {
      tag: "badfeedback_cost",
      patterns: "sao hàng ở đây đắt thế",
      responses:
        "giá sản phẩm của chúng tôi đã được tính theo quy định, bạn có thể ví dụ một số mặt hàng mà bạn cho là đắt được không."
    },
    {
      tag: "badfeedback_nhamhang",
      patterns: "hình như tôi bị giao nhầm hàng",
      responses:
        "cửa hàng đã ghi nhận phản hồi từ bạn, bạn đã đặt mặt hàng gì vậy ạ."
    },
    {
      tag: "badfeedback_nhamhang",
      patterns: "giao nhầm hàng rồi",
      responses:
        "cảm ơn bạn đã có phản hồi cho cửa hàng, ban đã đặt mặt hàng gì vậy"
    },
    {
      tag: "badfeedback_qua",
      patterns: "cái áo thế này làm sao tôi mặc được",
      responses: "quý khách không hài lòng với mẫu áo này ở điểm nào ạ."
    },
    {
      tag: "badfeedback_qua",
      patterns: "sản phẩm không giống mô tả",
      responses:
        "rất tiếc vì bạn đã không hài lòng với sản phẩm, bạn có thể mô tả rõ hơn về sự không hài lòng của bạn cho chúng tôi được không"
    },
    {
      tag: "badfeedback_qua",
      patterns: "sản phẩm dở quá, chưa dùng đã hỏng",
      responses:
        "rất tiếc vì bạn chưa hài lòng với sản phẩm, bạn có thể chụp hình sản phẩm hoặc mô tả về sản phẩm, chúng tôi có thể đổi hàng giúp bạn"
    },
    {
      tag: "badfeedback_time",
      patterns: "sao áo của tôi lâu của tôi mãi mà chưa tới vậy",
      responses:
        "xin lỗi quý khách, chúng tôi sẽ hối thúc bên giao hàng để giao có bạn sớm nhất"
    },
    {
      tag: "badfeedback_time",
      patterns: "tại sao tôi đặt cái áo len từ tháng trước mà giờ chưa có",
      responses:
        "bên giao hàng gặp một chút vấn đề, chúng tôi sẽ liên lạc với công ty giao hàng để sớm có câu trả lời cho bạn"
    },
    {
      tag: "badfeedback_time",
      patterns: "sao tôi đặt hàng 3 ngày rồi mà đồ chưa giao đến",
      responses:
        "đây có thể là lỗi do người vận chuyển, bạn gửi cho cửa hàng mã đơn để chúng tôi kiểm tra giúp bạn nhé"
    },
    {
      tag: "cancel_order",
      patterns: "hủy giúp mình đơn",
      responses: "dạ, mã đơn của mình là mã bao nhiêu vậy ạ"
    },
    {
      tag: "cancel_order",
      patterns: "tôi muốn hủy đơn này",
      responses:
        "dạ bên em ghi nhận thông tin của anh, nếu hợp lệ thì bên em sẽ gửi lại anh thông tin sau"
    },
    {
      tag: "cancel_order",
      patterns: "tôi hủy đơn này có được không",
      responses: "để chúng em kiểm tra rồi sẽ báo lại anh sau"
    },
    {
      tag: "cancel_order",
      patterns: "hàng không đúng mô tả nên tôi muốn hủy đơn",
      responses: "dạ để em kiểm tra lại giúp anh"
    },
    {
      tag: "cancel_order",
      patterns: "hủy đơn này cho tôi",
      responses:
        "rất tiếc đơn của anh đã được giao hàng, bọn em không thể hủy được"
    },
    {
      tag: "chao_hoi",
      patterns: "cửa hàng có ai không ạ",
      responses: "chào bạn, tôi có thể giúp gì cho bạn"
    },
    {
      tag: "chao_hoi",
      patterns: "có ai ở đây không",
      responses: "bạn đang có nhu cầu gì vậy"
    },
    {
      tag: "chao_hoi",
      patterns: "xin chào",
      responses: "bạn đang cần giúp đỡ điều gì"
    },
    { tag: "chao_hoi", patterns: "chào", responses: "xin chào quý khách" },
    { tag: "chao_hoi", patterns: "alo", responses: "chào bạn" },
    {
      tag: "chao_hoi",
      patterns: "chào shop",
      responses: "cửa hàng xin chào quý khách"
    },
    {
      tag: "chao_hoi",
      patterns: "alo shop",
      responses: "chúng tôi có thể giúp gì cho bạn"
    },
    { tag: "chao_hoi", patterns: "hi", responses: "xin chào" },
    { tag: "chao_hoi", patterns: "hello", responses: "hello" },
    {
      tag: "chao_hoi",
      patterns: "hề lú",
      responses: "chào bạn, bạn đang cần tìm gì ạ"
    },
    { tag: "chao_hoi", patterns: "helo", responses: "hi" },
    {
      tag: "con_hay_het",
      patterns: "mẫu áo sơ mi này còn không ạ",
      responses: "shop lúc nào cũng có rất nhiều hàng nhé em"
    },
    {
      tag: "con_hay_het",
      patterns: "cái áo da này shop còn không ",
      responses: "shop còn ạ"
    },
    {
      tag: "con_hay_het",
      patterns: "cái áo lông cừu này hết hàng chưa ạ",
      responses: "shop vẫn còn hàng nhé bạn"
    },
    {
      tag: "con_hay_het",
      patterns: "cái áo sọc caro kia shop còn không ",
      responses: "shop còn nhé"
    },
    {
      tag: "con_hay_het",
      patterns: "chị ơi cho em hỏi: chân váy dạ màu nâu shop còn không ",
      responses: "shop vẫn còn nhé bạn, bạn lấy mấy chiếc để mình lên đơn cho"
    },
    {
      tag: "con_hay_het",
      patterns: "cho anh hỏi shop còn mã T123 không",
      responses: "lúc nào bên em cũng có hàng ạ"
    },
    {
      tag: "con_hay_het",
      patterns: "mã T234 shop còn không ạ",
      responses: "mẫu đấy vẫn còn hàng nhé bạn"
    },
    {
      tag: "con_hay_het",
      patterns: "cái đầm xòe này còn hàng không",
      responses: "vẫn còn hàng nhé bạn"
    },
    {
      tag: "con_hay_het",
      patterns: "cái áo da này shop còn không ",
      responses: "bạn muốn lấy mấy đôi nhỉ"
    },
    {
      tag: "con_hay_het",
      patterns: "cái áo da này shop còn không ",
      responses: "dạ anh muốn lấy size mấy"
    },
    {
      tag: "con_hay_het",
      patterns: "đôi nike này cửa hàng mình còn không anh",
      responses: "dạ còn ạ"
    },
    {
      tag: "con_hay_het",
      patterns: "đôi adidas xanh shop còn không ",
      responses: "còn ạ"
    },
    {
      tag: "con_hay_het",
      patterns: "cái mũ T290 kia còn không chị",
      responses: "dạ còn ạ, anh muốn lấy size mấy"
    },
    {
      tag: "feedback",
      patterns: "hàng của tôi có lỗi, tôi muốn trả hàng",
      responses:
        "phiền anh gửi cho cửa hàng hình ảnh về sản phẩm lỗi, cửa hàng sẽ nhanh chóng xác nhận giúp anh"
    },
    {
      tag: "feedback",
      patterns: "em bị giao nhầm hàng",
      responses:
        "shop rất tiếc vì sự phiền hà này, bạn gửi lại cho shop mã để shop giao lại hàng cho bạn nhé"
    },
    {
      tag: "feedback_product",
      patterns: "hàng không giống trong ảnh",
      responses: "anh gửi lại ảnh sản phẩm cho cửa hàng được không"
    },
    {
      tag: "feedback_product",
      patterns: "ảnh một đằng sản phẩm một nẻo",
      responses: "anh gửi lại ảnh cho em để em kiểm tra lại ạ"
    },
    {
      tag: "feedback_product",
      patterns: "cái áo tôi nhận được khác với mẫu trên web",
      responses: "dạ chị gửi giùm em ảnh sản phẩm để shop kiểm tra nha"
    },
    {
      tag: "goi_y",
      patterns: "tôi muốn đặt áo",
      responses: " em mời anh xem thử, mộ số mẫu của cửa hàng"
    },
    {
      tag: "goi_y",
      patterns: "hàng mùa đông về chưa ạ",
      responses: "mời bạn xem thử một số mẫu nha"
    },
    {
      tag: "goi_y",
      patterns: "hàng mùa hè về chưa ạ",
      responses: "mời bạn xem thử một số mẫu trên web nha"
    },
    {
      tag: "goi_y",
      patterns: "đồ haloween shop mình có không",
      responses:
        "mời bạn ghé thăm website hoặc tới trực tiếp địa chỉ shop để xem hàng nhé"
    },
    {
      tag: "goi_y",
      patterns: "shop mình bán đồ thu đông chưa chị",
      responses: "mình gửi bạn một số mẫu sắp có nha"
    },
    {
      tag: "goi_y",
      patterns: "cửa hàng mình có hàng mới không chị",
      responses: "khi nào hàng về thì trên website bọn em sẽ có thông tin ạ"
    },
    {
      tag: "goi_y",
      patterns: "shop bắt đầu bán đồ hè chưa",
      responses:
        "mời bạn ghét thăm website thường xuyên để có các thông tin về hàng mới nhất của shop nhé"
    },
    {
      tag: "goi_y",
      patterns: "tôi muốn mua đồ mà không biết mua gì",
      responses: "em gửi anh/chị một số mẫu, anh chị xem thử xem nhé."
    },
    {
      tag: "goi_y",
      patterns: "mình muốn váy",
      responses: "dạ chị muốn dùng loại nào ạ"
    },
    {
      tag: "goodfeedback",
      patterns: "mẫu mã đẹp, giá cả phải chăng",
      responses:
        "shop cảm ơn vì bạn đã tin dùng sản phẩm, bạn thường xuyên ghé thăm shop nhé"
    },
    {
      tag: "goodfeedback",
      patterns: "chất vải rất mềm tay, đóng hàng đẹp, bán hàng có tâm",
      responses: "cảm ơn bạn vì đã lựa chọn sản phẩm của cửa hàng mình :))"
    },
    {
      tag: "goodfeedback",
      patterns: "giá rẻ, mà rất đúng ý",
      responses: "cảm ơn bạn nha"
    },
    {
      tag: "goodfeedback",
      patterns: "áo đẹp lắm shop",
      responses:
        "cảm ơn bạn, chúng tôi rất vui vì bạn thích sản phẩm của cửa hàng"
    },
    {
      tag: "goodfeedback",
      patterns: "bán hàng rất đúng gia",
      responses:
        "cảm ơn bạn, rất vui vì bạn đã đánh giá cao sản phẩm của chúng tôi"
    },
    {
      tag: "goodfeedback",
      patterns: "giày đi êm, vừa chân",
      responses: "rất vui vì bạn đã thích sản phẩm của shop"
    },
    {
      tag: "goodfeedback",
      patterns: "chất lượng sản phẩm rất tốt",
      responses: "cảm ơn bạn đã tin tưởng và sử dụng sản phẩm của cửa hàng"
    },
    {
      tag: "goodfeedback",
      patterns: "ok",
      responses: "cảm ơn bạn đã tin tưởng và sử dụng sản phẩm của cửa hàng"
    },
    {
      tag: "goodfeedback",
      patterns: "good",
      responses: "cảm ơn bạn đã tin tưởng và sử dụng sản phẩm của cửa hàng"
    },
    {
      tag: "goodfeedback",
      patterns: "god",
      responses: "cảm ơn bạn đã tin tưởng và sử dụng sản phẩm của cửa hàng"
    },
    {
      tag: "goodfeedback",
      patterns: "well",
      responses: "cảm ơn bạn đã tin tưởng và sử dụng sản phẩm của cửa hàng"
    },
    {
      tag: "goodfeedback",
      patterns: "chất lượng ok",
      responses: "cảm ơn bạn đã tin tưởng và sử dụng sản phẩm của cửa hàng"
    },
    {
      tag: "goodfeedback",
      patterns: "sp ok",
      responses: "cảm ơn bạn đã tin tưởng và sử dụng sản phẩm của cửa hàng"
    },
    {
      tag: "goodfeedback",
      patterns: "gia ca hop ly",
      responses: "cảm ơn bạn đã tin tưởng và sử dụng sản phẩm của cửa hàng"
    },
    {
      tag: "goodfeedback",
      patterns: "giá cả hợp lý",
      responses: "cảm ơn bạn đã tin tưởng và sử dụng sản phẩm của cửa hàng"
    },
    {
      tag: "goodfeedback",
      patterns: "hàng chuẩn",
      responses: "cảm ơn bạn đã tin tưởng và sử dụng sản phẩm của cửa hàng"
    },
    {
      tag: "goodfeedback",
      patterns: "sản phẩm chuẩn",
      responses: "cảm ơn bạn đã tin tưởng và sử dụng sản phẩm của cửa hàng"
    },
    {
      tag: "goodfeedback",
      patterns: "sản phẩm chính hãng",
      responses: "cảm ơn bạn đã tin tưởng và sử dụng sản phẩm của cửa hàng"
    },
    {
      tag: "goodfeedback",
      patterns: "chinh hang",
      responses: "cảm ơn bạn đã tin tưởng và sử dụng sản phẩm của cửa hàng"
    },
    {
      tag: "goodfeedback",
      patterns: "tot ",
      responses: "cảm ơn bạn đã tin tưởng và sử dụng sản phẩm của cửa hàng"
    },
    {
      tag: "goodfeedback",
      patterns: "san pham tot",
      responses: "cảm ơn bạn đã tin tưởng và sử dụng sản phẩm của cửa hàng"
    },
    {
      tag: "goodfeedback",
      patterns: "hang tot",
      responses: "cảm ơn bạn đã tin tưởng và sử dụng sản phẩm của cửa hàng"
    },
    {
      tag: "goodfeedback",
      patterns: "tốt",
      responses: "cảm ơn bạn đã tin tưởng và sử dụng sản phẩm của cửa hàng"
    },
    {
      tag: "goodfeedback",
      patterns: "hàng tốt",
      responses: "cảm ơn bạn đã tin tưởng và sử dụng sản phẩm của cửa hàng"
    },
    {
      tag: "goodfeedback",
      patterns: "sản phẩm tốt",
      responses: "cảm ơn bạn đã tin tưởng và sử dụng sản phẩm của cửa hàng"
    },
    {
      tag: "goodfeedback",
      patterns: "giá hợp lý",
      responses: "cảm ơn bạn đã tin tưởng và sử dụng sản phẩm của cửa hàng"
    },
    {
      tag: "goodfeedback",
      patterns: "hàng ok",
      responses: "cảm ơn bạn đã tin tưởng và sử dụng sản phẩm của cửa hàng"
    },
    {
      tag: "goodfeedback",
      patterns: "đóng gói tốt",
      responses: "cảm ơn bạn đã tin tưởng và sử dụng sản phẩm của cửa hàng"
    },
    {
      tag: "goodfeedback",
      patterns: "đóng gói chắc chắn",
      responses: "cảm ơn bạn đã tin tưởng và sử dụng sản phẩm của cửa hàng"
    },
    {
      tag: "goodfeedback",
      patterns: "dong goi chac chan",
      responses: "cảm ơn bạn đã tin tưởng và sử dụng sản phẩm của cửa hàng"
    },
    {
      tag: "goodfeedback",
      patterns: "áo đẹp",
      responses: "cảm ơn bạn đã tin tưởng và sử dụng sản phẩm của cửa hàng"
    },
    {
      tag: "goodfeedback",
      patterns: "sản phẩm đẹp",
      responses: "cảm ơn bạn đã tin tưởng và sử dụng sản phẩm của cửa hàng"
    },
    {
      tag: "goodfeedback",
      patterns: "hàng đẹp",
      responses: "cảm ơn bạn đã tin tưởng và sử dụng sản phẩm của cửa hàng"
    },
    {
      tag: "goodfeedback",
      patterns: "áo chuẩn",
      responses: "cảm ơn bạn đã tin tưởng và sử dụng sản phẩm của cửa hàng"
    },
    {
      tag: "goodfeedback",
      patterns: "vải đẹp",
      responses: "cảm ơn bạn đã tin tưởng và sử dụng sản phẩm của cửa hàng"
    },
    {
      tag: "goodfeedback",
      patterns: "giày đẹp",
      responses: "cảm ơn bạn đã tin tưởng và sử dụng sản phẩm của cửa hàng"
    },
    {
      tag: "goodfeedback",
      patterns: "hàng chuẩn, đẹp",
      responses: "cảm ơn bạn đã tin tưởng và sử dụng sản phẩm của cửa hàng"
    },
    {
      tag: "goodfeedback",
      patterns: "áo đẹp lắm",
      responses: "cảm ơn bạn đã tin tưởng và sử dụng sản phẩm của cửa hàng"
    },
    {
      tag: "goodfeedback",
      patterns: "very good",
      responses: "cảm ơn bạn đã tin tưởng và sử dụng sản phẩm của cửa hàng"
    },
    {
      tag: "goodfeedback",
      patterns: "chất lượng rất ok",
      responses: "cảm ơn bạn đã tin tưởng và sử dụng sản phẩm của cửa hàng"
    },
    {
      tag: "goodfeedback",
      patterns: "đóng gói rất ok",
      responses: "cảm ơn bạn đã tin tưởng và sử dụng sản phẩm của cửa hàng"
    },
    {
      tag: "goodfeedback",
      patterns: "đẹp",
      responses: "cảm ơn bạn đã tin tưởng và sử dụng sản phẩm của cửa hàng"
    },
    {
      tag: "goodfeedback",
      patterns: "sản phẩm đẹp",
      responses: "cảm ơn bạn đã tin tưởng và sử dụng sản phẩm của cửa hàng"
    },
    {
      tag: "khen_bot",
      patterns: "sao em thông minh thế",
      responses: "em còn nhỏ dại lắm, nhiều cái còn chưa biết"
    },
    { tag: "khen_bot", patterns: "bot khôn quá", responses: "dạ em cảm ơn" },
    {
      tag: "khen_bot",
      patterns: "thông minh vậy",
      responses: "dạ anh quá khen"
    },
    {
      tag: "khen_bot",
      patterns: "iq của em bao nhiêu vậy",
      responses: "iq của em là vô cực"
    },
    { tag: "khen_bot", patterns: "con bot này khôn vậy", responses: "hihi" },
    {
      tag: "khen_bot",
      patterns: "khôn vậy ai chơi",
      responses: "có nhiều người chơi với mình chứ"
    },
    {
      tag: "love",
      patterns: "em có người yêu chưa",
      responses: "em vẫn còn độc thân"
    },
    {
      tag: "love",
      patterns: "người yêu em là ai",
      responses: "em làm gì có người yêu em còn đang sợ ế đây này"
    },
    {
      tag: "love",
      patterns: "chồng cô là ai",
      responses: "em chưa có người yêu"
    },
    {
      tag: "love",
      patterns: "vợ anh là anh",
      responses: "mình chưa có người yêu"
    },
    {
      tag: "love",
      patterns: "bao giờ thì em lấy chồng",
      responses: "em còn chưa yêu ai"
    },
    {
      tag: "order",
      patterns: "tôi muốn đặt 2 cái quần xì đến 144 xuân thủy cầu giấy",
      responses: "đơn của bạn đã được ghi nhận"
    },
    {
      tag: "order",
      patterns: "tôi muốn đặt 1 áo len không cổ đến 1655 ngõ 3 Hoàng quốc việt",
      responses: "2 ngày sau đồ của anh sẽ tới thưa anh"
    },
    {
      tag: "order",
      patterns: "tôi muốn đặt 1 chiếc áo dạ đỏ đến số 25 xuân thủy",
      responses: "ngày mai hàng của chị sẽ tới nha."
    },
    {
      tag: "order",
      patterns: "tôi muốn đặt 5 chiếc khăn len đến 166 thanh xuân hà nội",
      responses: "dạ được ạ"
    },
    {
      tag: "order",
      patterns: "tôi muốn đặt 2 chiếc áo thun sọc đến Ngõ 2 hồ tùng mậu",
      responses: "đơn của bạn được ghi nhận"
    },
    {
      tag: "order",
      patterns: "tôi muốn đặt 10 chiếc tất len đến duy tân cầu giấy",
      responses:
        "dạ đơn của anh đã được gửi, rất vui vì anh đã chọn shop của em"
    },
    {
      tag: "order",
      patterns: "tôi muốn đặt 2 chiếc áo thun sọc đến số 35 trần quốc hoàn",
      responses: "ok bạn"
    },
    {
      tag: "order",
      patterns: "tôi muốn đặt 2 chiếc áo thun sọc đến 122 hoàng quốc việt",
      responses: "anh có muốn đặt thêm gì không ạ"
    },
    {
      tag: "order",
      patterns: "tôi muốn đặt 2 cái áo da bò đến 123 hàng trống",
      responses: "dạ được thưa anh"
    },
    {
      tag: "order",
      patterns: "tôi muốn đặt 2 chiếc quần bò đến ngõ 2 phạm văn đồng",
      responses: "bạn vui lòng đợi nhận hàng nha"
    },
    {
      tag: "order",
      patterns: "bán cho mình cái áo sơ mi này",
      responses: "anh/chị muốn đặt thêm gì không ạ"
    },
    {
      tag: "order",
      patterns: "bán cho mình cái quần này",
      responses: "shop đã ghi nhận đơn của anh"
    },
    {
      tag: "order",
      patterns: "bán cho mình đôi giày này",
      responses: "dạ đơn của anh/chị đã được ghi nhận"
    },
    {
      tag: "order",
      patterns: "gửi cho mình đôi giày này đến 144 xuân thủy cầu giấy",
      responses: "dạ đơn của anh/chị đã được ghi nhận"
    },
    {
      tag: "order",
      patterns: "gửi cho mình đến số 123 Hoang quoc viet",
      responses: "dạ đơn của anh/chị đã được ghi nhận"
    },
    {
      tag: "order_time",
      patterns: "tôi muốn hỏi mã đơn id_don3456 bao giờ mới tới vậy ạ",
      responses:
        "theo quy định thì đơn sẽ tới nay trong khoảng 5 ngày vận chuyển nha anh"
    },
    {
      tag: "order_time",
      patterns: "tôi muốn hỏi mã đơn id_don@##$$ bao giờ mới tới vậy ạ",
      responses: "đơn sẽ tới sau khi đặt 5 ngày anh nhé"
    },
    {
      tag: "order_time",
      patterns: "tôi muốn hỏi mã đơn id_don#fsdf$ bao giờ mới tới vậy ạ",
      responses: "anh đợi em kiểm tra rồi sẽ báo lại anh nhé"
    },
    {
      tag: "order_time",
      patterns: "tôi muốn hỏi mã đơn id_don%%%%456 bao giờ mới tới vậy ạ",
      responses: "dạ để em kiểm tra giúp anh"
    },
    {
      tag: "order_time",
      patterns: "tôi muốn hỏi mã đơn id_donfffff bao giờ mới tới vậy ạ",
      responses:
        "nếu không có gì đột xuất thì hàng sẽ tới tay anh trong 5 ngày kể từ ngày đặt anh nhé"
    },
    {
      tag: "order_time",
      patterns: "tôi muốn hỏi mã đơn id_donggsa123 bao giờ mới tới vậy ạ",
      responses: "thời gian giao đơn của chị tối đa là 5 ngày ạ"
    },
    {
      tag: "order_time",
      patterns: "mã đơn id_don bao giờ mới tới vậy ạ",
      responses: "đơn sẽ được chuyển tới bạn trong vòng 5 ngày nhé"
    },
    {
      tag: "order_time",
      patterns: "tôi muốn mua hàng online thì giao hàng trong bao lâu",
      responses:
        "đơn vị vận chuyển sẽ gửi hàng tới bạn muộn nhất là ngày thứ 5 kể từ khi bạn đặt hàng, nếu bạn đợi quá 5 ngày mà chưa có hàng thì báo lại cho shop nha"
    },
    {
      tag: "order_time",
      patterns: "đặt hàng online có nhanh có hàng không",
      responses:
        "dạ thông thường thì đơn sẽ tới tay anh trong 5 ngày, nếu anh đợi quá 5 ngày thì anh phản ảnh lại với shop để bọn em xử lý giúp anh ạ"
    },
    {
      tag: "order_time",
      patterns: "thời gian tôi đợi để nhận hàng là bao lâu",
      responses: "dạ thông thường thì đơn sẽ tới tay anh trong 5 ngày ạ"
    },
    {
      tag: "order_time",
      patterns: "tớ đặt hàng online thì có lâu không",
      responses: "tối đa 5 ngày anh/chị sẽ nhận được hàng ạ"
    },
    {
      tag: "price",
      patterns: "cái này giá bao nhiêu",
      responses:
        "bên em niêm yết giá các sản phẩm trên website, mời anh/chị xem ạ"
    },
    {
      tag: "price",
      patterns: "chân váy này giá bao nhiêu",
      responses:
        "đây là bảng giá các mẫu hàng của shop em, anh/chị xem giúp em với ạ"
    },
    {
      tag: "price",
      patterns: "cái áo bò này bán như nào",
      responses:
        "đây là bảng giá các mẫu hàng của shop em, anh/chị xem giúp em với ạ"
    },
    {
      tag: "price",
      patterns: "mẫu này bán như nào vậy",
      responses:
        "đây là bảng giá các mẫu hàng của shop em, anh/chị xem giúp em với ạ"
    },
    {
      tag: "price",
      patterns: "cái quần này bán như nào",
      responses:
        "đây là bảng giá các mẫu hàng của shop em, anh/chị xem giúp em với ạ"
    },
    {
      tag: "price",
      patterns: "tôi muốn hỏi giá của cái áo phao kia",
      responses:
        "đây là bảng giá các mẫu hàng của shop em, anh/chị xem giúp em với ạ"
    },
    {
      tag: "price",
      patterns: "shop cho tớ hỏi giá của đôi giày này với",
      responses:
        "đây là bảng giá các mẫu hàng của shop em, anh/chị xem giúp em với ạ"
    },
    {
      tag: "price",
      patterns: "shop báo giá cho mk cái váy kia được không",
      responses:
        "đây là bảng giá các mẫu hàng của shop em, anh/chị xem giúp em với ạ"
    },
    {
      tag: "price",
      patterns: "cai nay gia bao nhieu",
      responses:
        "đây là bảng giá các mẫu hàng của shop em, anh/chị xem giúp em với ạ"
    },
    {
      tag: "price",
      patterns: "cai nay gia bn?",
      responses:
        "đây là bảng giá các mẫu hàng của shop em, anh/chị xem giúp em với ạ"
    },
    {
      tag: "price",
      patterns: "mau nay ban gia ntn vay",
      responses:
        "đây là bảng giá các mẫu hàng của shop em, anh/chị xem giúp em với ạ"
    },
    {
      tag: "price",
      patterns: "doi giay nay gia bn vay?",
      responses:
        "đây là bảng giá các mẫu hàng của shop em, anh/chị xem giúp em với ạ"
    },
    {
      tag: "price",
      patterns: "tôi muốn xem giá sản phẩm",
      responses:
        "đây là bảng giá các mẫu hàng của shop em, anh/chị xem giúp em với ạ"
    },
    {
      tag: "ship_cost",
      patterns:
        "cho mình hỏi mình đặt giao áo tại nhà thì phí ship bao nhiêu vậy ạ",
      responses: "nội thành là 15k còn liên tỉnh là 30k nhé"
    },
    {
      tag: "ship_cost",
      patterns: "phí ship có cao không",
      responses: "nội thành là 15k còn liên tỉnh là 30k nhé"
    },
    {
      tag: "ship_cost",
      patterns: "ship tại nhà thì phí như thế nào",
      responses: "nội thành là 15k còn liên tỉnh là 30k nhé"
    },
    {
      tag: "ship_cost",
      patterns: "giá giao hàng tại nhà là bao nhiêu vậy",
      responses: "nội thành là 15k còn liên tỉnh là 30k nhé"
    },
    {
      tag: "ship_cost",
      patterns: "cho mình hỏi giá ship là bao nhiêu vậy",
      responses: "nội thành là 15k còn liên tỉnh là 30k nhé"
    },
    {
      tag: "ship_cost",
      patterns: "shop lấy giá ship là bao nhiêu",
      responses: "nội thành là 15k còn liên tỉnh là 30k nhé"
    },
    {
      tag: "ship_cost",
      patterns: "giá ship hàng là bao nhiêu vậy shop",
      responses: "nội thành là 15k còn liên tỉnh là 30k nhé"
    },
    {
      tag: "ship_cost",
      patterns: "shop cho tôi hỏi giá ship hàng",
      responses: "nội thành là 15k còn liên tỉnh là 30k nhé"
    },
    {
      tag: "ship_cost",
      patterns: "phi ship bao nhieu",
      responses: "nội thành là 15k còn liên tỉnh là 30k nhé"
    },
    {
      tag: "ship_cost",
      patterns: "freeship à",
      responses: "nội thành là 15k còn liên tỉnh là 30k nhé"
    },
    {
      tag: "ship_cost",
      patterns: "giá ship bao nhiêu",
      responses: "nội thành là 15k còn liên tỉnh là 30k nhé"
    },
    {
      tag: "ship_cost",
      patterns: "vận chuyển đến hồ tùng mâu gia bao nhieu",
      responses: "nội thành là 15k còn liên tỉnh là 30k nhé"
    },
    {
      tag: "ship_cost",
      patterns: "vận chuyển đến hoang quoc viet bao nhieu",
      responses: "nội thành là 15k còn liên tỉnh là 30k nhé"
    },
    {
      tag: "ship_cost",
      patterns: "vận chuyển đến xuân thủy gia bao nhieu",
      responses:
        "phí ship hiện tại bên mình là 15k cho nội thành Hà Nội, còn đi xuyên tỉnh là 30k nha bạn"
    },
    {
      tag: "ship_cost",
      patterns: "vận chuyển đến hồ tùng mậu giá bao nhieu",
      responses:
        "phí ship hiện tại bên mình là 15k cho nội thành Hà Nội, còn đi xuyên tỉnh là 30k nha bạn"
    },
    {
      tag: "ship_cost",
      patterns: "vận chuyển đến viet nam gia bao nhieu",
      responses:
        "phí ship hiện tại bên mình là 15k cho nội thành Hà Nội, còn đi xuyên tỉnh là 30k nha bạn"
    },
    {
      tag: "ship_cost",
      patterns: "vận chuyển đến công viên cầu giấy gia bao nhieu",
      responses:
        "phí ship hiện tại bên mình là 15k cho nội thành Hà Nội, còn đi xuyên tỉnh là 30k nha bạn"
    },
    {
      tag: "ship_cost",
      patterns: "vận chuyển đến cầu giấy gia bao nhieu",
      responses:
        "phí ship hiện tại bên mình là 15k cho nội thành Hà Nội, còn đi xuyên tỉnh là 30k nha bạn"
    },
    {
      tag: "ship_cost",
      patterns: "vận chuyển đến nguyễn trãi gia bao nhieu",
      responses:
        "phí ship hiện tại bên mình là 15k cho nội thành Hà Nội, còn đi xuyên tỉnh là 30k nha bạn"
    },
    {
      tag: "ship_cost",
      patterns: "phi ship bn",
      responses:
        "phí ship hiện tại bên mình là 15k cho nội thành Hà Nội, còn đi xuyên tỉnh là 30k nha bạn"
    },
    {
      tag: "ship_cost",
      patterns: "phí ship bao nhiêu",
      responses:
        "phí ship hiện tại bên mình là 15k cho nội thành Hà Nội, còn đi xuyên tỉnh là 30k nha bạn"
    },
    {
      tag: "ship_cost",
      patterns: "vận chuyển bao nhieu",
      responses:
        "phí ship hiện tại bên mình là 15k cho nội thành Hà Nội, còn đi xuyên tỉnh là 30k nha bạn"
    },
    {
      tag: "ship_cost",
      patterns: "vận chuyển hết bao nhiêu",
      responses:
        "phí ship hiện tại bên mình là 15k cho nội thành Hà Nội, còn đi xuyên tỉnh là 30k nha bạn"
    },
    {
      tag: "ship_cost",
      patterns: "ship bn v",
      responses:
        "phí ship hiện tại bên mình là 15k cho nội thành Hà Nội, còn đi xuyên tỉnh là 30k nha bạn"
    },
    {
      tag: "ship_cost",
      patterns: "ship bn vay",
      responses:
        "phí ship hiện tại bên mình là 15k cho nội thành Hà Nội, còn đi xuyên tỉnh là 30k nha bạn"
    },
    {
      tag: "ship_cost",
      patterns: "ship bao nhieu v",
      responses:
        "phí ship hiện tại bên mình là 15k cho nội thành Hà Nội, còn đi xuyên tỉnh là 30k nha bạn"
    },
    {
      tag: "ship_cost",
      patterns: "ship bao nhieu vay",
      responses:
        "phí ship hiện tại bên mình là 15k cho nội thành Hà Nội, còn đi xuyên tỉnh là 30k nha bạn"
    },
    {
      tag: "ship_cost",
      patterns: "phi ship bao nhiêu",
      responses:
        "phí ship hiện tại bên mình là 15k cho nội thành Hà Nội, còn đi xuyên tỉnh là 30k nha bạn"
    },
    {
      tag: "ship_cost",
      patterns: "ship đến hoàng quốc việt phí bao nhiêu",
      responses:
        "phí ship hiện tại bên mình là 15k cho nội thành Hà Nội, còn đi xuyên tỉnh là 30k nha bạn"
    },
    {
      tag: "ship_cost",
      patterns: "freeship khong shop",
      responses:
        "phí ship hiện tại bên mình là 15k cho nội thành Hà Nội, còn đi xuyên tỉnh là 30k nha bạn"
    },
    {
      tag: "ship_cost",
      patterns: "freeship không shop",
      responses:
        "phí ship hiện tại bên mình là 15k cho nội thành Hà Nội, còn đi xuyên tỉnh là 30k nha bạn"
    },
    {
      tag: "ship_cost",
      patterns: "freeship không v",
      responses:
        "phí ship hiện tại bên mình là 15k cho nội thành Hà Nội, còn đi xuyên tỉnh là 30k nha bạn"
    },
    {
      tag: "ship_cost",
      patterns: "freeship không bạn",
      responses:
        "phí ship hiện tại bên mình là 15k cho nội thành Hà Nội, còn đi xuyên tỉnh là 30k nha bạn"
    },
    {
      tag: "ship_cost",
      patterns: "freeship a",
      responses:
        "phí ship hiện tại bên mình là 15k cho nội thành Hà Nội, còn đi xuyên tỉnh là 30k nha bạn"
    },
    {
      tag: "thoi_gian_mo_cua",
      patterns: "cửa hàng mở cửa trong thời gian nào vậy",
      responses: "cửa hàng mở cửa cả tuần từ 7 giờ sáng đến 21 giờ tối"
    },
    {
      tag: "thoi_gian_mo_cua",
      patterns: "7 giờ sáng cửa hàng mở cửa chưa ạ",
      responses:
        "thời gian mở cửa của cửa hàng là từ 7 giờ sáng đến 21 giờ tối bạn nhé"
    },
    {
      tag: "thoi_gian_mo_cua",
      patterns: "tôi có thể tới cửa hàng lúc 8 giờ được không",
      responses: "bạn có thể đến cửa hàng trong khoảng từ 7 giờ đến 21 giờ nhé"
    },
    {
      tag: "thoi_gian_mo_cua",
      patterns: "chị đến cửa hàng lúc 9 giờ sáng được không",
      responses: "shop mở cửa từ 7 giờ sáng đến 9 giờ tối"
    },
    {
      tag: "thoi_gian_mo_cua",
      patterns: "mấy giờ đóng cửa",
      responses: "cửa hàng mở lúc 7 giờ sáng còn 9 giờ tối shop đóng cửa nhé"
    },
    {
      tag: "thoi_gian_mo_cua",
      patterns: "thời gian mở cửa hàng",
      responses: "cửa hàng mở lúc 7 giờ sáng còn 9 giờ tối shop đóng cửa nhé"
    },
    {
      tag: "thoi_gian_mo_cua",
      patterns: "mấy giờ bắt đầu vậy",
      responses: "cửa hàng mở lúc 7 giờ sáng còn 9 giờ tối shop đóng cửa nhé"
    },
    {
      tag: "thoi_gian_mo_cua",
      patterns: "thời gian như nào",
      responses: "cửa hàng mở lúc 7 giờ sáng còn 9 giờ tối shop đóng cửa nhé"
    },
    {
      tag: "thoi_gian_mo_cua",
      patterns: "8h mở cửa chưa",
      responses: "cửa hàng mở lúc 7 giờ sáng còn 9 giờ tối shop đóng cửa nhé"
    },
    {
      tag: "thoi_gian_mo_cua",
      patterns: "9h tối đóng cửa chưa shop",
      responses: "cửa hàng mở lúc 7 giờ sáng còn 9 giờ tối shop đóng cửa nhé"
    },
    {
      tag: "thoi_gian_mo_cua",
      patterns: "tôi đến shop lúc 10h sáng mai được không ?",
      responses: "cửa hàng mở lúc 7 giờ sáng còn 9 giờ tối shop đóng cửa nhé"
    },
    {
      tag: "thoi_gian_mo_cua",
      patterns: "tối shop mở cửa đến mấy giờ vậy",
      responses: "cửa hàng mở lúc 7 giờ sáng còn 9 giờ tối shop đóng cửa nhé"
    },
    {
      tag: "thoi_gian_mo_cua",
      patterns: "shop mở cửa buổi trưa không",
      responses: "cửa hàng mở lúc 7 giờ sáng còn 9 giờ tối shop đóng cửa nhé"
    },
    {
      tag: "thoi_gian_mo_cua",
      patterns: "shop mở cửa buổi tối không",
      responses: "cửa hàng mở lúc 7 giờ sáng còn 9 giờ tối shop đóng cửa nhé"
    },
    {
      tag: "thoi_gian_mo_cua",
      patterns: "2 giờ mở cửa chưa",
      responses: "cửa hàng mở lúc 7 giờ sáng còn 9 giờ tối shop đóng cửa nhé"
    },
    {
      tag: "thoi_gian_mo_cua",
      patterns: "1 giờ mở cửa chưa",
      responses: "cửa hàng mở lúc 7 giờ sáng còn 9 giờ tối shop đóng cửa nhé"
    },
    {
      tag: "thoi_gian_mo_cua",
      patterns: "0 giờ mở cửa chưa",
      responses: "cửa hàng mở lúc 7 giờ sáng còn 9 giờ tối shop đóng cửa nhé"
    },
    {
      tag: "thoi_gian_mo_cua",
      patterns: "1 giờ mở cửa chưa",
      responses: "cửa hàng mở lúc 7 giờ sáng còn 9 giờ tối shop đóng cửa nhé"
    },
    {
      tag: "thoi_gian_mo_cua",
      patterns: "2 giờ mở cửa chưa",
      responses: "cửa hàng mở lúc 7 giờ sáng còn 9 giờ tối shop đóng cửa nhé"
    },
    {
      tag: "thoi_gian_mo_cua",
      patterns: "3 giờ mở cửa chưa",
      responses: "cửa hàng mở lúc 7 giờ sáng còn 9 giờ tối shop đóng cửa nhé"
    },
    {
      tag: "thoi_gian_mo_cua",
      patterns: "4 giờ mở cửa chưa",
      responses: "cửa hàng mở lúc 7 giờ sáng còn 9 giờ tối shop đóng cửa nhé"
    },
    {
      tag: "thoi_gian_mo_cua",
      patterns: "5 giờ mở cửa chưa",
      responses: "cửa hàng mở lúc 7 giờ sáng còn 9 giờ tối shop đóng cửa nhé"
    },
    {
      tag: "thoi_gian_mo_cua",
      patterns: "6 giờ mở cửa chưa",
      responses: "cửa hàng mở lúc 7 giờ sáng còn 9 giờ tối shop đóng cửa nhé"
    },
    {
      tag: "thoi_gian_mo_cua",
      patterns: "7 giờ mở cửa chưa",
      responses: "cửa hàng mở lúc 7 giờ sáng còn 9 giờ tối shop đóng cửa nhé"
    },
    {
      tag: "thoi_gian_mo_cua",
      patterns: "8 giờ mở cửa chưa",
      responses: "cửa hàng mở lúc 7 giờ sáng còn 9 giờ tối shop đóng cửa nhé"
    }
  ]
};

const group1 = () => {
  var groups = {};
  var myArray = json.intents;
  for (var i = 0; i < myArray.length; i++) {
    var groupName = myArray[i].tag;
    if (!groups[groupName]) {
      groups[groupName] = [];
    }
    groups[groupName].push(myArray[i].patterns);
  }
  myArray = [];
  for (var groupName in groups) {
    myArray.push({ tag: groupName, patterns: groups[groupName] });
  }
  return myArray;
};
const group2 = () => {
  var groups = {};
  var myArray = json.intents;
  for (var i = 0; i < myArray.length; i++) {
    var groupName = myArray[i].tag;
    if (!groups[groupName]) {
      groups[groupName] = [];
    }
    groups[groupName].push(myArray[i].responses);
  }
  myArray = [];
  for (var groupName in groups) {
    myArray.push({ tag: groupName, responses: groups[groupName] });
  }
  return myArray;
};

arr1 = group1();
arr2 = group2();
// console.log(arr1)
// console.log(arr2)
console.log(arr1.length);
console.log(arr2.length);

for (let i = 0; i < arr1.length; i++) {
  arr1[i] = { ...arr1[i], responses: arr2[i].responses };
}
console.log(JSON.stringify(arr1));

